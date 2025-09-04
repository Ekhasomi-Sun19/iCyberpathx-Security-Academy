import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className="newsletter-form">
      {isSubscribed ? (
        <div className="success-message">
          <p style={{ color: 'green', fontWeight: 'bold' }}>
            ✓ Successfully subscribed to our newsletter!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="newsletter-button"
            disabled={isLoading || !email}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  )
}

export default Newsletter
