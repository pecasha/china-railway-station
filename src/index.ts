import data from "./data";

import type { Station } from "./@types";
export type * from "./@types";

let list: Station[];

/**
 * 获取车站全部列表
 */
export function getList(): Station[] {
    return list ??= data.split("@").map(str => {
        const [
            pinyinCode,
            name,
            telecode,
            pinyin,
            pinyinLetter,
            order,
            sameCityCode,
            city,
            countryEng,
            country,
            cityEng
        ] = str.split("|");
        const result: Station = {
            pinyinCode,
            name,
            telecode,
            pinyin,
            pinyinLetter,
            order: +order,
            sameCityCode,
            city
        }
        if(countryEng) {
            result.countryEng = countryEng;
        }
        if(country) {
            result.country = country;
        }
        if(cityEng) {
            result.cityEng = cityEng;
        }
        return result;
    });
}

/**
 * 获取车站全部列表（城市分组格式）
 */
export function getListCityGroup() {
    return Object.groupBy(getList(), ({city}) => city);
}

/**
 * 模糊搜索车站
 * @param keyword 关键词
 */
export function getStation(keyword: string) {
    keyword = keyword.toLowerCase();
    return getList().filter(item => (
        item.pinyinCode.includes(keyword) ||
        item.name.includes(keyword) ||
        item.telecode.toLowerCase().includes(keyword) ||
        item.pinyin.includes(keyword) ||
        item.pinyinLetter.includes(keyword) ||
        item.sameCityCode.includes(keyword) ||
        item.city.includes(keyword)
    ));
}

/**
 * 通过车站名获取车站信息
 * @param name 车站名
 */
export function getStationByName(name: string) {
    return getList().find(item => item.name === name);
}

/**
 * 通过电报码获取车站信息
 * @param telecode 电报码
 */
export function getStationByTelecode(telecode: string) {
    telecode = telecode.toUpperCase();
    return getList().find(item => item.telecode === telecode);
}

/**
 * 通过拼音码获取车站信息
 * @param pinyinCode 拼音码
 */
export function getStationByPinyinCode(pinyinCode: string) {
    pinyinCode = pinyinCode.toLowerCase();
    return getList().filter(item => item.pinyinCode === pinyinCode);
}

/**
 * 通过城市名或城市编码获取车站信息
 * @param city 城市名/城市编码
 */
export function getStationByCity(city: string) {
    return getList().filter(item => item.city === city || item.sameCityCode === city);
}
