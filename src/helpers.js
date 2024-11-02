export const getFont = (type = '') => {
    const fullType = type === 'BL' ? 'Black' : type === 'BO' ? 'BOLD' : type === 'M' ? 'Medium' : type === 'R' ? 'Regular' : ''
    return 'Inter_28pt-' + fullType
}