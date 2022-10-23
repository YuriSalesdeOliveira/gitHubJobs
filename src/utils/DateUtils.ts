export const DateUtils = {

    dateDiffInDays: (date: Date, to: Date): number => {
        const MS_PER_DAY = 1000 * 60 * 60 * 24;

        const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
        const utc2 = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());

        return Math.floor((utc2 - utc1) / MS_PER_DAY);
    }

}
