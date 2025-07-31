/**
 * User's activity
 *
 * @example
 * const sampleActivity: Activity = {
 *   id: 22,
 *   course: 'Frontend course',
 *   data: '2023-05-15',
 *   xp: 4200,
 * };
 *
 */
export type Activity = {
  id: number;
  course: string;
  date: string;
  xp: number;
};
