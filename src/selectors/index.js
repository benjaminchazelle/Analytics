import {createSelector} from 'reselect'
import {isAfter, isBefore} from 'date-fns'

const getVisitData = (state) => state.visitData;
const getVisitFilter = (state) => state.visitFilter;

export const getVisibleVisitData = createSelector(
    [getVisitData, getVisitFilter],
    (visitData, visitFilter) => {

        let visibleVisitData = visitData.data;

        if (!visitFilter.origins.desktop) {
            visibleVisitData = visibleVisitData.filter(visit => visit.agent.mobile)
        }

        if (!visitFilter.origins.mobile) {
            visibleVisitData = visibleVisitData.filter(visit => !visit.agent.mobile)
        }

        if (!visitFilter.origins.bot) {
            visibleVisitData = visibleVisitData.filter(visit => !visit.agent.bot)
        }


        if (!visitFilter.origins.desktop && !visitFilter.origins.mobile && visitFilter.origins.bot) {
            visibleVisitData = visitData.data.filter(visit => !visit.agent.bot)
        }

        if (!visitFilter.origins.owner) {
            visibleVisitData = visibleVisitData.filter(visit => visit.ip !== "82.242.194.92")
        }

        visibleVisitData = visibleVisitData.filter(visit => isBefore(new Date(parseInt(visit.start)), visitFilter.period.to));
        visibleVisitData = visibleVisitData.filter(visit => isAfter(new Date(parseInt(visit.start)), visitFilter.period.from));

        return visibleVisitData;
    },
);