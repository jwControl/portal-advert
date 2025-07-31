export enum SortOption {
  NEWEST = 'newest',
  LOWEST_PRICE = 'priceLowToHigh',
  HIGHEST_PRICE = 'priceHighToLow',
}

export const SORT_OPTIONS_LIST: { label: string; value: SortOption }[] = [
  { label: 'Newest', value: SortOption.NEWEST },
  { label: 'Lowest Price', value: SortOption.LOWEST_PRICE },
  { label: 'Highest Price', value: SortOption.HIGHEST_PRICE },
];
