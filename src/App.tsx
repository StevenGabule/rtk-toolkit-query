import { useMemo, useReducer } from 'react'
import { counterReducer, increment, decrement, reset } from './features/counter-reducer'
import { useGetItemsQuery } from './services/api-service'

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, {count: 0})
  const {data, isLoading} = useGetItemsQuery(undefined, {pollingInterval: 20})
  const items = useMemo(() => data?.items || [], [data])
  return (
    <>
    <p>{state.count}</p>
    <p>
      <button type="button" onClick={() => dispatch(increment(1))}>increment</button>
      <button type="button" onClick={() => dispatch(decrement(1))}>decrement</button>
      <button type="button" onClick={() => dispatch(reset())}>reset</button>
    </p>
    </>
  )
}

export default App
