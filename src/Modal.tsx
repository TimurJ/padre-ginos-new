import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const elRef = useRef<Element | null>(null)

  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    if (elRef.current) {
      modalRoot?.appendChild(elRef.current)
    }

    return () => {
      if (elRef.current) {
        modalRoot?.removeChild(elRef.current)
      }
    }
  }, [])

  return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal
