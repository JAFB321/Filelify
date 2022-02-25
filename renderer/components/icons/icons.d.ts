import * as React from 'react'
import {} from 'lottie-web'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement, HTMLLinkElement>;
    }
  }
}