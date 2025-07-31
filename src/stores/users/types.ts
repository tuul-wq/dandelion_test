/**
 * User
 *
 * @example
 * const sampleUser: User = {
 *   name: "Taylor Swift",
 *   avatar: "https://mysite.com/avatar",
 *   xp: 4200,
 *   nextLevelXp: 5000,
 *   completedCourses: 3,
 *   skills: ["Git", "HTML5", "CSS3"]
 * };
 *
 */
export type User = {
  name: string;
  avatar: string;
  xp: number;
  nextLevelXp: number;
  completedCourses: number;
  skills: string[];
};
