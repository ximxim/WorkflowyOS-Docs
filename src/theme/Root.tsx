import React, {
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  type FormEvent,
} from 'react'
import Head from '@docusaurus/Head'
import useBaseUrl from '@docusaurus/useBaseUrl'

// ─── Configuration ────────────────────────────────────────────────────────────
//
// To change the password:
// 1. Choose your new password
// 2. Run in a browser console or Node 18+:
//      const buf = new TextEncoder().encode('your-password')
//      const hash = await crypto.subtle.digest('SHA-256', buf)
//      console.log(Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2,'0')).join(''))
// 3. Replace EXPECTED_HASH with the output
// 4. Bump LS_KEY version to force all users to re-authenticate
//
const EXPECTED_HASH =
  '47beaaffd25b46d2ab7dec348bbe8351ab33856753ad7b69c65eeb35c158c59b'

const LS_KEY = 'purposemed_auth_v1'

// ─── SHA-256 Helper ───────────────────────────────────────────────────────────

async function sha256Hex(input: string): Promise<string> {
  const encoded = new TextEncoder().encode(input)
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoded)
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

// ─── Inline Styles ────────────────────────────────────────────────────────────
// Inline to guarantee correct rendering before Docusaurus CSS loads.

const COLORS = {
  bg: '#1b1b1d',
  surface: '#242526',
  border: '#393939',
  text: '#ffffff',
  muted: '#adaead',
  accent: '#53F2F3',
  accentDark: '#00CBDB',
  error: '#ff6b6b',
} as const

const styles = {
  overlay: {
    position: 'fixed' as const,
    inset: 0,
    background: COLORS.bg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    fontFamily: 'var(--ifm-font-family-base, system-ui, sans-serif)',
  },
  card: {
    background: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    borderRadius: '16px',
    padding: '2.5rem 2rem',
    width: '100%',
    maxWidth: '400px',
    margin: '1rem',
    textAlign: 'center' as const,
  },
  logo: {
    width: '52px',
    height: '48px',
    marginBottom: '1rem',
  },
  brandName: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: COLORS.text,
    margin: '0 0 0.25rem',
    letterSpacing: '-0.01em',
  },
  subtitle: {
    fontSize: '0.875rem',
    color: COLORS.muted,
    margin: '0 0 2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    background: COLORS.bg,
    border: `1px solid ${COLORS.border}`,
    borderRadius: '8px',
    color: COLORS.text,
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.15s ease',
  },
  button: {
    padding: '0.75rem 1rem',
    background: `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.accentDark} 100%)`,
    border: 'none',
    borderRadius: '8px',
    color: '#000000',
    fontWeight: 600,
    fontSize: '0.9375rem',
    cursor: 'pointer',
    transition: 'opacity 0.15s ease',
  },
  error: {
    fontSize: '0.8125rem',
    color: COLORS.error,
    marginTop: '0.25rem',
  },
  lockButtonWrapper: {
    position: 'fixed' as const,
    bottom: '1.25rem',
    right: '1.25rem',
    zIndex: 999,
  },
  lockButton: {
    background: 'transparent',
    border: `1px solid ${COLORS.border}`,
    borderRadius: '6px',
    color: COLORS.muted,
    fontSize: '0.75rem',
    padding: '0.3rem 0.6rem',
    cursor: 'pointer',
    transition: 'opacity 0.15s ease',
  },
} as const

// ─── Lock Screen ──────────────────────────────────────────────────────────────

interface LockScreenProps {
  logoSrc: string
  onSuccess: () => void
}

function LockScreen({ logoSrc, onSuccess }: LockScreenProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [inputFocused, setInputFocused] = useState(false)

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      if (!password.trim() || isChecking) return

      setIsChecking(true)
      setError('')

      try {
        const hash = await sha256Hex(password)
        if (hash === EXPECTED_HASH) {
          localStorage.setItem(LS_KEY, 'true')
          onSuccess()
        } else {
          setError('Incorrect password. Please try again.')
          setPassword('')
        }
      } catch {
        setError('An error occurred. Please try again.')
      } finally {
        setIsChecking(false)
      }
    },
    [password, isChecking, onSuccess],
  )

  const isDisabled = isChecking || !password.trim()

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div style={styles.overlay}>
        <div style={styles.card}>
          <img
            src={logoSrc}
            alt="Purposemed.ai logo"
            style={styles.logo}
          />
          <p style={styles.brandName}>Purposemed.ai</p>
          <p style={styles.subtitle}>
            Executive AI Training — Private Access
          </p>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              placeholder="Enter access password"
              autoComplete="current-password"
              autoFocus
              style={{
                ...styles.input,
                ...(inputFocused
                  ? { borderColor: COLORS.accent }
                  : {}),
              }}
            />

            {error && (
              <p style={styles.error} role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isDisabled}
              style={{
                ...styles.button,
                opacity: isDisabled ? 0.6 : 1,
                cursor: isDisabled ? 'not-allowed' : 'pointer',
              }}
            >
              {isChecking ? 'Verifying…' : 'Access Training'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

// ─── Lock Button ──────────────────────────────────────────────────────────────

interface LockButtonProps {
  onLock: () => void
}

function LockButton({ onLock }: LockButtonProps) {
  const [hovered, setHovered] = useState(false)

  const handleClick = useCallback(() => {
    localStorage.removeItem(LS_KEY)
    onLock()
  }, [onLock])

  return (
    <div style={styles.lockButtonWrapper}>
      <button
        style={{
          ...styles.lockButton,
          opacity: hovered ? 1 : 0.5,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        title="Lock this site"
        aria-label="Lock this site"
      >
        Lock
      </button>
    </div>
  )
}

// ─── Root Component ───────────────────────────────────────────────────────────

interface RootProps {
  children: ReactNode
}

export default function Root({ children }: RootProps): React.JSX.Element {
  const logoSrc = useBaseUrl('/img/logo.svg')

  const [authenticated, setAuthenticated] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem(LS_KEY) === 'true'
  })

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === LS_KEY) {
        setAuthenticated(e.newValue === 'true')
      }
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])

  if (!authenticated) {
    return <LockScreen logoSrc={logoSrc} onSuccess={() => setAuthenticated(true)} />
  }

  return (
    <>
      {children}
      <LockButton onLock={() => setAuthenticated(false)} />
    </>
  )
}
