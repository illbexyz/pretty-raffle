export const CHANGE_LIST = 'CHANGE_LIST';

function change(index, entries) {
  return {
    type: CHANGE_LIST,
    index,
    entries,
  };
}

export function changeList(index) {
  return (dispatch, getState) => {
    const list = getState().lists.lists[index];
    const entries = Object.keys(list.partecipants)
      .map(key => list.partecipants[key]);
    dispatch(change(index, entries));
  };
}

export const UPDATE_ENTRIES = 'UPDATE_ENTRIES';

export function updateEntries(entries) {
  return {
    type: UPDATE_ENTRIES,
    entries,
  };
}

export const EXTRACT = 'EXTRACT';

export function extract(winner) {
  return {
    type: EXTRACT,
    winner,
  };
}

export function runExtraction() {
  return (dispatch, getState) => {
    const entries = getState().raffle.entries;
    const min = 0;
    const max = entries.length;
    const extracted = Math.floor(Math.random() * (max - min)) + min;
    const newEntries = [
      ...entries.slice(0, extracted),
      ...entries.slice(extracted + 1, entries.length),
    ];
    dispatch(updateEntries(newEntries));
    dispatch(extract(entries[extracted]));
  };
}
