import { DependencyList, useCallback, useState, useRef } from 'react'
import useMountedState from './useMounted'

export default function useAsyncFn (fn, options= {
    deps: [],
    initialState: { loading: false },
  } ) {
    const { initialState = { loading: false }, deps = [], successHandler, errorHandler } = options
  
    const lastCallId = useRef(0)
    const [state, set] = useState(initialState)
  
    const isMounted = useMountedState()
  
    const callback = useCallback((...args) => {
      const callId = ++lastCallId.current
      set({ loading: true })
  
      return fn(...args).then(
        (value) => {
          const callback = args[args.length - 1]
  
          if (isMounted() && callId === lastCallId.current) {
            successHandler && successHandler(value)
            if (typeof callback === 'function') {
              callback()
            }
            set({ value, loading: false })
          }
          return value
        },
        (error) => {
          if (isMounted() && callId === lastCallId.current) {
            errorHandler && errorHandler(error)
            set({ error, loading: false })
          }
          return null
        },
      )
    }, deps)
  
    return [state, callback]
  }