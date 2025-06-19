/** 站点信息 */
export interface Station {
    /** 拼音码 */
    pinyinCode: string;
    /** 站名 */
    name: string;
    /** 电报码 */
    telecode: string;
    /** 拼音 */
    pinyin: string;
    /** 拼音首字母 */
    pinyinLetter: string;
    /** 序号 */
    order: number;
    /** 城市编码 */
    sameCityCode: string;
    /** 所属城市 */
    city: string;
    /** 所属城市英文名 */
    cityEng?: string;
    /** 所属国家 */
    country?: string;
    /** 所属国家英文名 */
    countryEng?: string;

}
