export type PaginationOptions<T> = {
  page?: string;
  limit?: string;
  order?: 'ASC' | 'DESC';
  startDate?: Date;
  endDate?: Date;
  // where?: T | string;
};

export const notificationEntity = [
  'ReferralGiven',
  'OneToOne',
  'Tyfcb',
  'Users',
  'Visitor',
];
