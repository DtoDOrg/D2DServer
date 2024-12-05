import format from 'date-fns/format';
export const formatDate = stringDate => {
    const date = new Date(stringDate);
    const formattedDate = format(date, 'hh:mm:ss dd/MM/yyyy');
    return formattedDate;
};
