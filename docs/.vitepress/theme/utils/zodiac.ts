/**
 * 获取生肖图标
 *
 * @param year 年份
 */
export function getChineseZodiac(year: number): string {
    const arr: string[] = ['monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat'];
    return arr[year % 12];
}

/**
 * 获取生肖名称
 *
 * @param year 年份
 */
export function getChineseZodiacAlias(year: number): string {
    const arr: string[] = ['猴年', '鸡年', '狗年', '猪年', '鼠年', '牛年', '虎年', '兔年', '龙年', '蛇年', '马年', '羊年'];
    return arr[year % 12];
}
