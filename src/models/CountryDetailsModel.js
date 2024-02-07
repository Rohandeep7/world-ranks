import BaseModel from "./common/BaseModel";

export default class CountryDetailsModel extends BaseModel {
  //definition

  /**
   *
   * @type {Object}
   */
  name;

  /**
   *
   * @type {Array}
   */
  tld;

  /**
   *
   * @type {String}
   */
  cca2;

  /**
   *
   * @type {String}
   */
  ccn3;

  /**
   *
   * @type {String}
   */
  cca3;

  /**
   *
   * @type {String}
   */
  cioc;

  /**
   *
   * @type {Boolean}
   */
  independent;

  /**
   *
   * @type {String}
   */
  status;

  /**
   *
   * @type {Boolean}
   */
  unMember;

  /**
   *
   * @type {Object}
   */
  currencies;

  /**
   *
   * @type {Object}
   */
  idd;

  /**
   *
   * @type {Array}
   */
  capital;

  /**
   *
   * @type {Array}
   */
  altSpellings;

  /**
   *
   * @type {String}
   */
  region;

  /**
   *
   * @type {String}
   */
  subregion;

  /**
   *
   * @type {Object}
   */
  languages;

  /**
   *
   * @type {Object}
   */
  translations;

  /**
   *
   * @type {Array}
   */
  latlng;

  /**
   *
   * @type {Boolean}
   */
  landlocked;

  /**
   *
   * @type {Array}
   */
  borders;

  /**
   *
   * @type {Number}
   */
  area;

  /**
   *
   * @type {Object}
   */
  demonyms;

  /**
   *
   * @type {String}
   */
  flag;

  /**
   *
   * @type {Object}
   */
  maps;

  /**
   *
   * @type {Number}
   */
  population;

  /**
   *
   * @type {Object}
   */
  gini;

  /**
   *
   * @type {String}
   */
  fifa;

  /**
   *
   * @type {Object}
   */
  car;

  /**
   *
   * @type {Array}
   */
  timezones;

  /**
   *
   * @type {Array}
   */
  continents;

  /**
   *
   * @type {Object}
   */
  flags;

  /**
   *
   * @type {Object}
   */
  coatOfArms;

  /**
   *
   * @type {String}
   */
  startOfWeek;

  /**
   *
   * @type {Object}
   */
  capitalInfo;

  /**
   *
   * @type {Object}
   */
  postalCode;

  constructor(model = {}) {
    super();

    this.name = model.name;
    this.tld = model.tld;
    this.cca2 = model.cca2;
    this.ccn3 = model.ccn3;
    this.cca3 = model.cca3;
    this.cioc = model.cioc;
    this.independent = model.independent;
    this.status = model.status;
    this.unMember = model.unMember;
    this.currencies = model.currencies;
    this.idd = model.idd;
    this.capital = model.capital;
    this.altSpellings = model.altSpellings;
    this.region = model.region;
    this.subregion = model.subregion;
    this.languages = model.languages;
    this.translations = model.translations;
    this.latlng = model.latlng;
    this.landlocked = model.landlocked;
    this.borders = model.borders;
    this.area = model.area;
    this.demonyms = model.demonyms;
    this.flag = model.flag;
    this.maps = model.maps;
    this.population = model.population;
    this.gini = model.gini;
    this.fifa = model.fifa;
    this.car = model.car;
    this.timezones = model.timezones;
    this.continents = model.continents;
    this.flags = model.flags;
    this.coatOfArms = model.coatOfArms;
    this.startOfWeek = model.startOfWeek;
    this.capitalInfo = model.capitalInfo;
    this.postalCode = model.postalCode;
  }
}
