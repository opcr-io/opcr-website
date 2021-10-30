import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useForm } from 'react-hook-form';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

// Styles
import styles from './NewsletterSignUp.module.css';
// import { createPopup } from '@typeform/embed'
// import { sendEvent } from '../../../../lib/ga'

const NewsletterSignUp = (
//   shouldDisplayTypeForm
) => {
//   const { register, handleSubmit } = useForm<{ email: string }>()
  const { register, handleSubmit } = useForm()
  const [clearErr, setClearErr] = useState('')
//   const [alreadySawTypeForm, setAlreadySawTypeForm] = useState(false)
// //   TODO move this to env
//   const { toggle } = createPopup('RMHYXKD5')
//   const onClickCTA = () => {
//     sendEvent({
//       action: 'click',
//       params: {
//         event_label: `${window.location.pathname} Let's go`
//       }
//     })
//   }

//   const showTypeForm = () => {
//     // onClickCTA()
//     if (!alreadySawTypeForm && shouldDisplayTypeForm) {
//       toggle()
//       setAlreadySawTypeForm(true)
//     }
//   }

  return (
    <section>
        <div
            id="sign-up"
            className={clsx(styles.signUp, 'container')}
        >
            <div className={styles.signUpFlexDiv}>
                <h3 className={styles.signUpHeading}>
                    Sign up for the newsletter
                </h3>
                <p>
                    Stay up to date with news about OPCR.
                </p>
            </div>
            <div className={styles.signUpFlexDiv}>
                <MailchimpSubscribe
                  url={process.env.REACT_APP_MAILCHIMP_URL}
                    render={({ subscribe, status, message }) => (
                    <form
                        id="form-1"
                        onSubmit={handleSubmit((data) => {
                            subscribe({ EMAIL: data.email })
                            setClearErr(`${status}`)
                            setTimeout(() => {
                            setClearErr('')
                            }, 5000)
                        })}
                        className={styles.mailchimpForm}
                    >
                    <div className={styles.submitEmail}>
                        <input
                            // placeholder="Enter your email..."
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                maxLength: 50,
                                pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/,
                                message: 'Email must be valid'
                                }
                            })}
                            className={clsx(styles.emailInput, "margin--sm")}
                        />
                        <Link className={styles.signUpFlexDiv}>
                            {clearErr === '' ? (
                            <button className="button button--secondary button--lg margin--sm">Let’s go!</button>
                            ) : status ? (
                            status === 'sending' ? (
                                <svg className={clsx(styles.svg, styles.animateSpin)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                            ) : status === 'error' ? (
                                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ) : (
                                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            )
                            ) : (
                            'Let’s go!'
                            )}
                        </Link>
                    </div>
                    <p 
                        className="margin-horiz--sm"
                        dangerouslySetInnerHTML={{__html: (
                            clearErr === ''
                            ? ''
                            : status === 'success'
                            ? 'Thanks for signing up! Info coming soon.'
                            : status === 'error'
                            ? message
                            : ''
                        )}}
                    >
                    </p>
                    {/* {status === 'success' ? showTypeForm() : null} */}
                    </form>
                )}
                />
            </div>
        </div>
    </section>
  )
}

export default NewsletterSignUp