import React from 'react'

const Container = ({ children, type }) => {
    return (
        <main className=
            {`flex  flex-col container p-5 ${type ? type : ''}
            rounded-xl items-center gap-5 bg-slate-50
            `}
        >
            {children}
        </main>
    )
}

export default Container