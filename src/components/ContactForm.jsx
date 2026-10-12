'use client'

import { useRef, useState } from 'react'
import { CircleAlert, CircleCheck, Send } from 'lucide-react'

const initialValues = { name: '', email: '', subject: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email, like name@example.com.'
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) errors.message = 'Please write a message.'
  else if (values.message.trim().length < 10) errors.message = 'Your message should be at least 10 characters.'
  return errors
}

const inputClass =
  'block w-full rounded-2xl border bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted/70 transition focus:border-accent-purple focus:outline-none focus:ring-4 focus:ring-accent-purple/15 sm:text-sm'

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label} <span className="text-accent-pink-deep" aria-hidden="true">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-[#c0264f]">
          <CircleAlert className="size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm({ recipient }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(nextValues)[name] }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      setStatus('invalid')
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
    setStatus('opened')
  }

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    required: true,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: `${inputClass} ${errors[name] ? 'border-[#e3577f]' : 'border-line'}`,
  })

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-lift backdrop-blur sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Name" error={errors.name}>
          <input type="text" autoComplete="name" placeholder="Your name" {...fieldProps('name')} />
        </Field>
        <Field id="contact-email" label="Email" error={errors.email}>
          <input type="email" autoComplete="email" placeholder="you@example.com" {...fieldProps('email')} />
        </Field>
      </div>

      <div className="mt-5 flex flex-col gap-5">
        <Field id="contact-subject" label="Subject" error={errors.subject}>
          <input type="text" placeholder="What would you like to talk about?" {...fieldProps('subject')} />
        </Field>
        <Field id="contact-message" label="Message" error={errors.message}>
          <textarea rows={5} placeholder="Tell me a little about your idea or opportunity…" {...fieldProps('message')} />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink-muted sm:max-w-[16rem]">
          This opens your email app with the message pre-filled. Nothing is sent from this website.
        </p>
        <button
          type="submit"
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
        >
          Compose Email
          <Send className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>

      <div role="status" aria-live="polite" className="empty:hidden">
        {status === 'opened' && (
          <p className="mt-5 flex items-start gap-2 rounded-2xl bg-[#ecfdf3] p-4 text-sm text-[#166534]">
            <CircleCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              Your email app should now be open with your message ready to send. If nothing happened, you can email me
              directly at{' '}
              <a href={`mailto:${recipient}`} className="font-semibold underline underline-offset-2">
                {recipient}
              </a>
              .
            </span>
          </p>
        )}
        {status === 'invalid' && Object.keys(errors).length > 0 && (
          <p className="mt-5 flex items-center gap-2 text-sm text-[#c0264f]">
            <CircleAlert className="size-4 shrink-0" aria-hidden="true" />
            Please fix the highlighted fields and try again.
          </p>
        )}
      </div>
    </form>
  )
}
