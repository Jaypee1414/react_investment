import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const HeaderBar = styled.header`
  padding: 1rem;
  max-width: 30rem;
  margin: 2rem auto;
  border-radius: 4px;
  background: linear-gradient(180deg, #307e6c, #2b996d);

  & label {
  display: block;
  margin-bottom: 0.25rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

& input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #76c0ae;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #c2e9e0;
  font-size: 1rem;
}
`

const InputGroup =styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
`

function UserInput({onChange, userIput}) {
  return (
    <HeaderBar>
      <InputGroup>
        <label>
          <h2>Initial Investment</h2>
          <input type="number" value={userIput.initialInvestment} onChange={(event)=> onChange("initialInvestment", event.target.value)} />
        </label>
        <label>
          <h2>Annual Investment</h2>
          <input type="number" value={userIput.annualInvestment} onChange={(event)=> onChange("annualInvestment", event.target.value)} />
        </label>
      </InputGroup>
      <InputGroup>
        <label>
          <h2>Expectation Return</h2>
          <input type="number" value={userIput.expectedReturn} onChange={(event)=> onChange("expectedReturn", event.target.value)}  />
        </label>
        <label>
          <h2>Duration</h2>
          <input type="number" value={userIput.duration} onChange={(event)=> onChange("duration", event.target.value)}  />
        </label>
      </InputGroup>
    </HeaderBar>
  )
}

export default UserInput
