export const dateFormatter = new Intl.DateTimeFormat("pt-BR")

export const priceFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
})

export const firstUpperCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);