export const hostService = {
    query

}
window.cs = hostService


async function query(filterBy = {}) {
    var stays = await storageService.query(STORAGE_KEY)
    // const { filterBy } = store.getState().toyModule
    const { region, startDate, endDate } = filterBy
    console.log('filterBy:', filterBy)
    console.log((`start date that we filter by : ${startDate}`));
    console.log((`end date that we filter by : ${endDate}`));


    if (region) {
        const regex = new RegExp(filterBy.region, 'i')
        stays = stays.filter(stay => regex.test(stay.region))
        console.log('stays after region filter:', stays)
    }

    if (endDate && startDate) {
        console.log('filter by dates!!!!!!!');
        stays = stays.filter(stay =>
            (new Date(stay.checkIn) >= startDate && new Date(stay.checkOut) <= endDate)
        )
    }
}