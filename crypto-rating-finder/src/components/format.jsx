export function formatDollors(amount){
    const dollor=Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    })
    return dollor.format(amount)
}

export function formatPercentage(amount){
    return parseFloat(amount).toFixed(2);
}