import React from 'react'
import ExpenseData from '../components/ExpenseData'

const ExpenseList = () => {
    return (
        <section className="text-black body-font flex items-center justify-center md:mt-32 mt-20">
            <div className="w-full container mx-auto py-3 px-5 max-w-3xl space-y-2">
                <ExpenseData/>
            </div>
        </section>
    )
}

export default ExpenseList