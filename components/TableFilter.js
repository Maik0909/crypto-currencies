import React from 'react'
import { HiFilter, HiLightningBolt } from 'react-icons/hi'
import styled from 'styled-components'


const TableFilter = () => {
    return (
        <Filter>
            <HiFilter size="1.25rem" color="#8F57F8" />
            <h4>Filter by</h4>
            <Options>
                <li>Trendy</li>
                <li>Lost</li>
                <li>Gain</li>
                <HiLightningBolt size="1rem" color="#8F57F8" />
            </Options>
        </Filter>
    )
}


const Filter = styled.div`
    display: inline-flex;
    align-items: center;
    align-items: center;
    margin-left: 2rem;
    width: 100%;
      & h4{
        font-size: 1.1rem;
    }
`
const Options = styled.ul`
    display: flex;
    list-style-type: none;
    position: relative;
    justify-content: space-around;
    width: 40%;


    & li{
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
        color: #121212;
    }


    
    
`


export default TableFilter
