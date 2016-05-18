export const ADD_ENTRIES_LIST = 'ADD_ENTRIES_LIST';

export function addEntriesList(entries) {
  return {
    type: ADD_ENTRIES_LIST,
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
    dispatch(addEntriesList(newEntries));
    dispatch(extract(entries[extracted]));
  };
}
