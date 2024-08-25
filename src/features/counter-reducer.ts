import { createAction, createReducer } from '@reduxjs/toolkit'
export const increment = createAction('INCREMENT', (amount: number) => ({payload: amount}))
export const decrement = createAction('DECREMENT', (amount: number) => ({payload: amount}))
export const reset = createAction('RESET');

export const counterReducer = createReducer({count: 0}, (b) => {
	b.addCase(increment, (s, p) => {
		s.count += p.payload;
	})
	b.addCase(decrement, (s, p) => {
		s.count -= p.payload;
	})
	b.addCase(reset, (s) => {
		s.count = 0;
	} )
})
