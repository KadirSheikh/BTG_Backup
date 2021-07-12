import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  hideForm: boolean = true;
  emailFlag: boolean = false;
  faxFlag: boolean = false
  countries = [
    { name: 'AFGHANISTAN', 'code': 'AF' },
    { name: 'ÅLAND ISLANDS', 'code': 'AX' },
    { name: 'ALBANIA', 'code': 'AL' },
    { name: 'ALGERIA', 'code': 'DZ' },
    { name: 'AMERICAN SAMOA', 'code': 'AS' },
    { name: 'ANDORRA', 'code': 'AD' },
    { name: 'ANGOLA', 'code': 'AO' },
    { name: 'ANGUILLA', 'code': 'AI' },
    { name: 'ANTARCTICA', 'code': 'AQ' },
    { name: 'ANTIGUA AND BARBUDA', 'code': 'AG' },
    { name: 'ARGENTINA', 'code': 'AR' },
    { name: 'ARMENIA', 'code': 'AM' },
    { name: 'ARUBA', 'code': 'AW' },
    { name: 'AUSTRALIA', 'code': 'AU' },
    { name: 'AUSTRIA', 'code': 'AT' },
    { name: 'AZERBAIJAN', 'code': 'AZ' },
    { name: 'BAHAMAS', 'code': 'BS' },
    { name: 'BAHRAIN', 'code': 'BH' },
    { name: 'BANGLADESH', 'code': 'BD' },
    { name: 'BARBADOS', 'code': 'BB' },
    { name: 'BELARUS', 'code': 'BY' },
    { name: 'BELGIUM', 'code': 'BE' },
    { name: 'BELIZE', 'code': 'BZ' },
    { name: 'BENIN', 'code': 'BJ' },
    { name: 'BERMUDA', 'code': 'BM' },
    { name: 'BHUTAN', 'code': 'BT' },
    { name: 'BOLIVIA, PLURINATIONAL STATE OF', 'code': 'BO' },
    { name: 'BOSNIA AND HERZEGOVINA', 'code': 'BA' },
    { name: 'BOTSWANA', 'code': 'BW' },
    { name: 'BOUVET ISLAND', 'code': 'BV' },
    { name: 'BRAZIL', 'code': 'BR' },
    { name: 'BRITISH INDIAN OCEAN TERRITORY', 'code': 'IO' },
    { name: 'BRUNEI DARUSSALAM', 'code': 'BN' },
    { name: 'BULGARIA', 'code': 'BG' },
    { name: 'BURKINA FASO', 'code': 'BF' },
    { name: 'BURUNDI', 'code': 'BI' },
    { name: 'CAMBODIA', 'code': 'KH' },
    { name: 'CAMEROON', 'code': 'CM' },
    { name: 'CANADA', 'code': 'CA' },
    { name: 'CAPE VERDE', 'code': 'CV' },
    { name: 'CAYMAN ISLANDS', 'code': 'KY' },
    { name: 'CENTRAL AFRICAN REPUBLIC', 'code': 'CF' },
    { name: 'CHAD', 'code': 'TD' },
    { name: 'CHILE', 'code': 'CL' },
    { name: 'CHINA', 'code': 'CN' },
    { name: 'CHRISTMAS ISLAND', 'code': 'CX' },
    { name: 'COCOS (KEELING) ISLANDS', 'code': 'CC' },
    { name: 'COLOMBIA', 'code': 'CO' },
    { name: 'COMOROS', 'code': 'KM' },
    { name: 'CONGO', 'code': 'CG' },
    { name: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', 'code': 'CD' },
    { name: 'COOK ISLANDS', 'code': 'CK' },
    { name: 'COSTA RICA', 'code': 'CR' },
    { name: 'CÔTE D\'IVOIRE', 'code': 'CI' },
    { name: 'CROATIA', 'code': 'HR' },
    { name: 'CUBA', 'code': 'CU' },
    { name: 'CYPRUS', 'code': 'CY' },
    { name: 'CZECH REPUBLIC', 'code': 'CZ' },
    { name: 'DENMARK', 'code': 'DK' },
    { name: 'DJIBOUTI', 'code': 'DJ' },
    { name: 'DOMINICA', 'code': 'DM' },
    { name: 'DOMINICAN REPUBLIC', 'code': 'DO' },
    { name: 'ECUADOR', 'code': 'EC' },
    { name: 'EGYPT', 'code': 'EG' },
    { name: 'EL SALVADOR', 'code': 'SV' },
    { name: 'EQUATORIAL GUINEA', 'code': 'GQ' },
    { name: 'ERITREA', 'code': 'ER' },
    { name: 'ESTONIA', 'code': 'EE' },
    { name: 'ETHIOPIA', 'code': 'ET' },
    { name: 'FALKLAND ISLANDS (MALVINAS)', 'code': 'FK' },
    { name: 'FAROE ISLANDS', 'code': 'FO' },
    { name: 'FIJI', 'code': 'FJ' },
    { name: 'FINLAND', 'code': 'FI' },
    { name: 'FRANCE', 'code': 'FR' },
    { name: 'FRENCH GUIANA', 'code': 'GF' },
    { name: 'FRENCH POLYNESIA', 'code': 'PF' },
    { name: 'FRENCH SOUTHERN TERRITORIES', 'code': 'TF' },
    { name: 'GABON', 'code': 'GA' },
    { name: 'GAMBIA', 'code': 'GM' },
    { name: 'GEORGIA', 'code': 'GE' },
    { name: 'GERMANY', 'code': 'DE' },
    { name: 'GHANA', 'code': 'GH' },
    { name: 'GIBRALTAR', 'code': 'GI' },
    { name: 'GREECE', 'code': 'GR' },
    { name: 'GREENLAND', 'code': 'GL' },
    { name: 'GRENADA', 'code': 'GD' },
    { name: 'GUADELOUPE', 'code': 'GP' },
    { name: 'GUAM', 'code': 'GU' },
    { name: 'GUATEMALA', 'code': 'GT' },
    { name: 'GUERNSEY', 'code': 'GG' },
    { name: 'GUINEA', 'code': 'GN' },
    { name: 'GUINEA-BISSAU', 'code': 'GW' },
    { name: 'GUYANA', 'code': 'GY' },
    { name: 'HAITI', 'code': 'HT' },
    { name: 'HEARD ISLAND AND MCDONALD ISLANDS', 'code': 'HM' },
    { name: 'HOLY SEE (VATICAN CITY STATE)', 'code': 'VA' },
    { name: 'HONDURAS', 'code': 'HN' },
    { name: 'HONG KONG', 'code': 'HK' },
    { name: 'HUNGARY', 'code': 'HU' },
    { name: 'ICELAND', 'code': 'IS' },
    { name: 'INDIA', 'code': 'IN' },
    { name: 'INDONESIA', 'code': 'ID' },
    { name: 'IRAN, ISLAMIC REPUBLIC OF', 'code': 'IR' },
    { name: 'IRAQ', 'code': 'IQ' },
    { name: 'IRELAND', 'code': 'IE' },
    { name: 'ISLE OF MAN', 'code': 'IM' },
    { name: 'ISRAEL', 'code': 'IL' },
    { name: 'ITALY', 'code': 'IT' },
    { name: 'JAMAICA', 'code': 'JM' },
    { name: 'JAPAN', 'code': 'JP' },
    { name: 'JERSEY', 'code': 'JE' },
    { name: 'JORDAN', 'code': 'JO' },
    { name: 'KAZAKHSTAN', 'code': 'KZ' },
    { name: 'KENYA', 'code': 'KE' },
    { name: 'KIRIBATI', 'code': 'KI' },
    { name: 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF', 'code': 'KP' },
    { name: 'KOREA, REPUBLIC OF', 'code': 'KR' },
    { name: 'KUWAIT', 'code': 'KW' },
    { name: 'KYRGYZSTAN', 'code': 'KG' },
    { name: 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC', 'code': 'LA' },
    { name: 'LATVIA', 'code': 'LV' },
    { name: 'LEBANON', 'code': 'LB' },
    { name: 'LESOTHO', 'code': 'LS' },
    { name: 'LIBERIA', 'code': 'LR' },
    { name: 'LIBYAN ARAB JAMAHIRIYA', 'code': 'LY' },
    { name: 'LIECHTENSTEIN', 'code': 'LI' },
    { name: 'LITHUANIA', 'code': 'LT' },
    { name: 'LUXEMBOURG', 'code': 'LU' },
    { name: 'MACAO', 'code': 'MO' },
    { name: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', 'code': 'MK' },
    { name: 'MADAGASCAR', 'code': 'MG' },
    { name: 'MALAWI', 'code': 'MW' },
    { name: 'MALAYSIA', 'code': 'MY' },
    { name: 'MALDIVES', 'code': 'MV' },
    { name: 'MALI', 'code': 'ML' },
    { name: 'MALTA', 'code': 'MT' },
    { name: 'MARSHALL ISLANDS', 'code': 'MH' },
    { name: 'MARTINIQUE', 'code': 'MQ' },
    { name: 'MAURITANIA', 'code': 'MR' },
    { name: 'MAURITIUS', 'code': 'MU' },
    { name: 'MAYOTTE', 'code': 'YT' },
    { name: 'MEXICO', 'code': 'MX' },
    { name: 'MICRONESIA, FEDERATED STATES OF', 'code': 'FM' },
    { name: 'MOLDOVA, REPUBLIC OF', 'code': 'MD' },
    { name: 'MONACO', 'code': 'MC' },
    { name: 'MONGOLIA', 'code': 'MN' },
    { name: 'MONTENEGRO', 'code': 'ME' },
    { name: 'MONTSERRAT', 'code': 'MS' },
    { name: 'MOROCCO', 'code': 'MA' },
    { name: 'MOZAMBIQUE', 'code': 'MZ' },
    { name: 'MYANMAR', 'code': 'MM' },
    { name: 'NAMIBIA', 'code': 'NA' },
    { name: 'NAURU', 'code': 'NR' },
    { name: 'NEPAL', 'code': 'NP' },
    { name: 'NETHERLANDS', 'code': 'NL' },
    { name: 'NETHERLANDS ANTILLES', 'code': 'AN' },
    { name: 'NEW CALEDONIA', 'code': 'NC' },
    { name: 'NEW ZEALAND', 'code': 'NZ' },
    { name: 'NICARAGUA', 'code': 'NI' },
    { name: 'NIGER', 'code': 'NE' },
    { name: 'NIGERIA', 'code': 'NG' },
    { name: 'NIUE', 'code': 'NU' },
    { name: 'NORFOLK ISLAND', 'code': 'NF' },
    { name: 'NORTHERN MARIANA ISLANDS', 'code': 'MP' },
    { name: 'NORWAY', 'code': 'NO' },
    { name: 'OMAN', 'code': 'OM' },
    { name: 'PAKISTAN', 'code': 'PK' },
    { name: 'PALAU', 'code': 'PW' },
    { name: 'PALESTINIAN TERRITORY, OCCUPIED', 'code': 'PS' },
    { name: 'PANAMA', 'code': 'PA' },
    { name: 'PAPUA NEW GUINEA', 'code': 'PG' },
    { name: 'PARAGUAY', 'code': 'PY' },
    { name: 'PERU', 'code': 'PE' },
    { name: 'PHILIPPINES', 'code': 'PH' },
    { name: 'PITCAIRN', 'code': 'PN' },
    { name: 'POLAND', 'code': 'PL' },
    { name: 'PORTUGAL', 'code': 'PT' },
    { name: 'PUERTO RICO', 'code': 'PR' },
    { name: 'QATAR', 'code': 'QA' },
    { name: 'RÉUNION', 'code': 'RE' },
    { name: 'ROMANIA', 'code': 'RO' },
    { name: 'RUSSIAN FEDERATION', 'code': 'RU' },
    { name: 'RWANDA', 'code': 'RW' },
    { name: 'SAINT BARTHÉLEMY', 'code': 'BL' },
    { name: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA', 'code': 'SH' },
    { name: 'SAINT KITTS AND NEVIS', 'code': 'KN' },
    { name: 'SAINT LUCIA', 'code': 'LC' },
    { name: 'SAINT MARTIN', 'code': 'MF' },
    { name: 'SAINT PIERRE AND MIQUELON', 'code': 'PM' },
    { name: 'SAINT VINCENT AND THE GRENADINES', 'code': 'VC' },
    { name: 'SAMOA', 'code': 'WS' },
    { name: 'SAN MARINO', 'code': 'SM' },
    { name: 'SAO TOME AND PRINCIPE', 'code': 'ST' },
    { name: 'SAUDI ARABIA', 'code': 'SA' },
    { name: 'SENEGAL', 'code': 'SN' },
    { name: 'SERBIA', 'code': 'RS' },
    { name: 'SEYCHELLES', 'code': 'SC' },
    { name: 'SIERRA LEONE', 'code': 'SL' },
    { name: 'SINGAPORE', 'code': 'SG' },
    { name: 'SLOVAKIA', 'code': 'SK' },
    { name: 'SLOVENIA', 'code': 'SI' },
    { name: 'SOLOMON ISLANDS', 'code': 'SB' },
    { name: 'SOMALIA', 'code': 'SO' },
    { name: 'SOUTH AFRICA', 'code': 'ZA' },
    { name: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', 'code': 'GS' },
    { name: 'SPAIN', 'code': 'ES' },
    { name: 'SRI LANKA', 'code': 'LK' },
    { name: 'SUDAN', 'code': 'SD' },
    { name: 'SURNAME', 'code': 'SR' },
    { name: 'SVALBARD AND JAN MAYEN', 'code': 'SJ' },
    { name: 'SWAZILAND', 'code': 'SZ' },
    { name: 'SWEDEN', 'code': 'SE' },
    { name: 'SWITZERLAND', 'code': 'CH' },
    { name: 'SYRIAN ARAB REPUBLIC', 'code': 'SY' },
    { name: 'TAIWAN, PROVINCE OF CHINA', 'code': 'TW' },
    { name: 'TAJIKISTAN', 'code': 'TJ' },
    { name: 'TANZANIA, UNITED REPUBLIC OF', 'code': 'TZ' },
    { name: 'THAILAND', 'code': 'TH' },
    { name: 'TIMOR-LESTE', 'code': 'TL' },
    { name: 'TOGO', 'code': 'TG' },
    { name: 'TOKELAU', 'code': 'TK' },
    { name: 'TONGA', 'code': 'TO' },
    { name: 'TRINIDAD AND TOBAGO', 'code': 'TT' },
    { name: 'TUNISIA', 'code': 'TN' },
    { name: 'TURKEY', 'code': 'TR' },
    { name: 'TURKMENISTAN', 'code': 'TM' },
    { name: 'TURKS AND CAICOS ISLANDS', 'code': 'TC' },
    { name: 'TUVALU', 'code': 'TV' },
    { name: 'UGANDA', 'code': 'UG' },
    { name: 'UKRAINE', 'code': 'UA' },
    { name: 'UNITED ARAB EMIRATES', 'code': 'AE' },
    { name: 'UNITED KINGDOM', 'code': 'GB' },
    { name: 'UNITED STATES', 'code': 'US' },
    { name: 'UNITED STATES MINOR OUTLYING ISLANDS', 'code': 'UM' },
    { name: 'URUGUAY', 'code': 'UY' },
    { name: 'UZBEKISTAN', 'code': 'UZ' },
    { name: 'VANUATU', 'code': 'VU' },
    { name: 'VENEZUELA, BOLIVARIAN REPUBLIC OF', 'code': 'VE' },
    { name: 'VIET NAM', 'code': 'VN' },
    { name: 'VIRGIN ISLANDS, BRITISH', 'code': 'VG' },
    { name: 'VIRGIN ISLANDS, U.S.', 'code': 'VI' },
    { name: 'WALLIS AND FUTUNA', 'code': 'WF' },
    { name: 'WESTERN SAHARA', 'code': 'EH' },
    { name: 'YEMEN', 'code': 'YE' },
    { name: 'ZAMBIA', 'code': 'ZM' },
    { name: 'ZIMBABWE', 'code': 'ZW' }
  ];


  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  toggleContactForm(e) {
    if (e.target.value == 'Email'){
      this.emailFlag = true;
      this.faxFlag = false;
    }
      
    else{
      this.faxFlag = true;
      this.emailFlag = false;
    }
      

  }

  hideThis() {
    this.hideForm = false;
  }

  toggle() {
    this.hideForm = !this.hideForm
    window.scroll(0, 0);
  }

  data = [];
  async getCountry(value) {
    // alert(value)
    this._http.get(`${environment.apiUrl}api/contact/get/${value}`).subscribe((res: any) => {
      console.error(res)
      this.data = res.data
    })
  }

}
