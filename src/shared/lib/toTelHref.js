export const toTelHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`
