/**
 * Created by linruoyu on 2018/8/17.
 */
$(function(){addEvent('map_1');addEvent('map_2');addEvent('map_3');addEvent('map_4');addEvent('map_5');addEvent('map_6');addEvent('map_7');addEvent('map_8');addEvent('map_9');addEvent('map_10');addEvent('map_11');addEvent('map_12');addEvent('map_13');addEvent('map_14');addEvent('map_15');addEvent('map_16');addEvent('map_17');addEvent('map_18');addEvent('map_19');addEvent('map_20');addEvent('map_21');addEvent('map_22');addEvent('map_23');addEvent('map_24');addEvent('map_25');addEvent('map_26');addEvent('map_27');addEvent('map_28');addEvent('map_29');addEvent('map_30');addEvent('map_31');addEvent('map_32');addEvent('map_33');addEvent('map_34');addEvent('map_35');addEvent('map_36');addEvent('map_37');addEvent('map_38');addEvent('map_39');addEvent('map_40');addEvent('map_41');addEvent('map_42');addEvent('map_43');addEvent('map_44');addEvent('map_45');addEvent('map_46');addEvent('map_47');addEvent('map_48');addEvent('map_49');addEvent('map_50');addEvent('map_51');addEvent('map_52');addEvent('map_53');addEvent('map_54');addEvent('map_55');addEvent('map_56');addEvent('map_57');addEvent('map_58');addEvent('map_59');addEvent('map_60');addEvent('map_61');addEvent('map_62');addEvent('map_63');addEvent('map_64');addEvent('map_65');addEvent('map_66');addEvent('map_67');addEvent('map_68');addEvent('map_69');addEvent('map_70');addEvent('map_71');addEvent('map_72');addEvent('map_73');addEvent('map_74');addEvent('map_75');addEvent('map_76');addEvent('map_77');addEvent('map_78');addEvent('map_79');addEvent('map_80');addEvent('map_81');addEvent('map_82');addEvent('map_83');addEvent('map_84');addEvent('map_85');addEvent('map_86');addEvent('map_87');addEvent('map_88');addEvent('map_89');addEvent('map_90');addEvent('map_91');addEvent('map_92');addEvent('map_93');addEvent('map_94');addEvent('map_95');addEvent('map_96');addEvent('map_97');addEvent('map_98');addEvent('map_99');addEvent('map_100');addEvent('map_101');addEvent('map_102');addEvent('map_103');addEvent('map_104');addEvent('map_105');addEvent('map_106');addEvent('map_107');addEvent('map_108');addEvent('map_109');addEvent('map_110');addEvent('map_111');addEvent('map_112');addEvent('map_113');addEvent('map_114');addEvent('map_115');addEvent('map_116');addEvent('map_117');addEvent('map_118');addEvent('map_119');addEvent('map_120');addEvent('map_121');addEvent('map_122');addEvent('map_123');addEvent('map_124');addEvent('map_125');addEvent('map_126');addEvent('map_127');addEvent('map_128');addEvent('map_129');addEvent('map_130');addEvent('map_131');addEvent('map_132');addEvent('map_133');addEvent('map_134');addEvent('map_135');addEvent('map_136');addEvent('map_137');addEvent('map_138');addEvent('map_139');addEvent('map_140');addEvent('map_141');addEvent('map_142');addEvent('map_143');addEvent('map_144');addEvent('map_145');addEvent('map_146');addEvent('map_147');addEvent('map_148');addEvent('map_149');addEvent('map_150');addEvent('map_151');addEvent('map_152');addEvent('map_153');addEvent('map_154');addEvent('map_155');addEvent('map_156');addEvent('map_157');addEvent('map_158');addEvent('map_159');addEvent('map_160');addEvent('map_161');addEvent('map_162');addEvent('map_163');addEvent('map_164');addEvent('map_165');addEvent('map_166');addEvent('map_167');addEvent('map_168');addEvent('map_169');addEvent('map_170');addEvent('map_171');addEvent('map_172');addEvent('map_173');addEvent('map_174');addEvent('map_175');addEvent('map_176');addEvent('map_177');addEvent('map_178');addEvent('map_179');addEvent('map_180');});

var map_config = {
        'default':{'borderColor':'#9CA8B6','mapShadow':'#fff','shadowOpacity':'35','hoverShadow':'#666666','lakesColor':'#66CCFF','namesColor':'#919191',},
        'map_1':{
            'hover': 'AFGHANISTAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_2':{
            'hover': 'ALBANIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_3':{
            'hover': 'ALGERIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_4':{
            'hover': 'ANDORRA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_5':{
            'hover': 'ANGOLA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_6':{
            'hover': 'ARGENTINA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_7':{
            'hover': 'ARMENIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_8':{
            'hover': 'AUSTRALIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_9':{
            'hover': 'AUSTRIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_10':{
            'hover': 'AZERBAIJAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_11':{
            'hover': 'BAHAMAS','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_12':{
            'hover': 'BAHRAIN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_13':{
            'hover': 'BANGLADESH','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_14':{
            'hover': 'BELARUS','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_15':{
            'hover': 'BELGIUM','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_16':{
            'hover': 'BELIZE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_17':{
            'hover': 'BENIN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_18':{
            'hover': 'BHUTAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_19':{
            'hover': 'BOLIVIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_20':{
            'hover': 'BOSNIA AND HERZEGOVINA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_21':{
            'hover': 'BOTSWANA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_22':{
            'hover': 'BRAZIL','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_23':{
            'hover': 'BRUNEI','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_24':{
            'hover': 'BULGARIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_25':{
            'hover': 'BURKINA FASO','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_26':{
            'hover': 'BURUNDI','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_27':{
            'hover': 'CAMBODIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_28':{
            'hover': 'CAMEROON','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_29':{
            'hover': 'CANADA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_30':{
            'hover': 'CENTRAL AFRICAN REPUBLIC','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_31':{
            'hover': 'CHAD','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_32':{
            'hover': 'CHILE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_33':{
            'hover': 'CHINA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_34':{
            'hover': 'COLOMBIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_35':{
            'hover': 'COMOROS','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_36':{
            'hover': 'CONGO','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_37':{
            'hover': 'COSTA RICA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_38':{
            'hover': 'CROATIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_39':{
            'hover': 'CUBA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_40':{
            'hover': 'CYPRUS','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_41':{
            'hover': 'CZECH REPUBLIC','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_42':{
            'hover': 'C?TE D&#39;IVOIRE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_43':{
            'hover': 'DEMOCRATIC REPUBLIC OF THE CONGO','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_44':{
            'hover': 'DENMARK','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_45':{
            'hover': 'DJIBOUTI','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_46':{
            'hover': 'DOMINICAN REPUBLIC','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_47':{
            'hover': 'ECUADOR','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_48':{
            'hover': 'EGYPT','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_49':{
            'hover': 'EL SALVADOR','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_50':{
            'hover': 'EQUATORIAL GUINEA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_51':{
            'hover': 'ERITREA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_52':{
            'hover': 'ESTONIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_53':{
            'hover': 'ETHIOPIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_54':{
            'hover': 'FIJI','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_55':{
            'hover': 'FINLAND','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_56':{
            'hover': 'FRANCE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_57':{
            'hover': 'FRENCH GUIANA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_58':{
            'hover': 'GABON','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_59':{
            'hover': 'GEORGIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_60':{
            'hover': 'GERMANY','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_61':{
            'hover': 'GHANA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_62':{
            'hover': 'GREECE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_63':{
            'hover': 'GREENLAND','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_64':{
            'hover': 'GUATEMALA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_65':{
            'hover': 'GUINEA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_66':{
            'hover': 'GUINEA-BISSAU','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_67':{
            'hover': 'GUYANA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_68':{
            'hover': 'HAITI','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_69':{
            'hover': 'HONDURAS','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_70':{
            'hover': 'HUNGARY','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_71':{
            'hover': 'ICELAND','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_72':{
            'hover': 'INDIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_73':{
            'hover': 'INDONESIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_74':{
            'hover': 'IRAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_75':{
            'hover': 'IRAQ','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_76':{
            'hover': 'IRELAND','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_77':{
            'hover': 'ISREAL','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_78':{
            'hover': 'ITALY','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_79':{
            'hover': 'JAMAICA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_80':{
            'hover': 'JAPAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_81':{
            'hover': 'JORDAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_82':{
            'hover': 'KAZAKHSTAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_83':{
            'hover': 'KENYA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_84':{
            'hover': 'KOSOVO','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_85':{
            'hover': 'KUWAIT','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_86':{
            'hover': 'KYRGYZSTAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_87':{
            'hover': 'LAOS','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_88':{
            'hover': 'LATVIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_89':{
            'hover': 'LEBANON','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_90':{
            'hover': 'LESOTHO','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_91':{
            'hover': 'LIBERIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_92':{
            'hover': 'LIBYA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_93':{
            'hover': 'LIECHTENSTEIN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_94':{
            'hover': 'LITHUANIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_95':{
            'hover': 'LUXEMBOURG','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_96':{
            'hover': 'MACEDONIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_97':{
            'hover': 'MADAGASCAR','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_98':{
            'hover': 'MALAWI','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_99':{
            'hover': 'MALAYSIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_100':{
            'hover': 'MALDIVES','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_101':{
            'hover': 'MALI','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_102':{
            'hover': 'MALTA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_103':{
            'hover': 'MAURITANIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_104':{
            'hover': 'MAURITIUS','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_105':{
            'hover': 'MEXICO','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_106':{
            'hover': 'MOLDOVA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_107':{
            'hover': 'MONGOLIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_108':{
            'hover': 'MONTENEGRO','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_109':{
            'hover': 'MOROCCO','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_110':{
            'hover': 'MOZAMBIQUE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_111':{
            'hover': 'MYANMAR','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_112':{
            'hover': 'NAMIBIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_113':{
            'hover': 'NEPAL','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_114':{
            'hover': 'NETHERLANDS','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_115':{
            'hover': 'NEW ZEALAND','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_116':{
            'hover': 'NICARAGUA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_117':{
            'hover': 'NIGER','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_118':{
            'hover': 'NIGERIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_119':{
            'hover': 'NORTH KOREA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_120':{
            'hover': 'NORWAY','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_121':{
            'hover': 'OMAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_122':{
            'hover': 'PAKISTAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_123':{
            'hover': 'PALESTINE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_124':{
            'hover': 'PANAMA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_125':{
            'hover': 'PAPUA NEW GUINEA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_126':{
            'hover': 'PARAGUAY','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_127':{
            'hover': 'PERU','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_128':{
            'hover': 'PHILIPPINES','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_129':{
            'hover': 'POLAND','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_130':{
            'hover': 'PORTUGAL','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_131':{
            'hover': 'PUETRO RICO','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_132':{
            'hover': 'QATAR','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_133':{
            'hover': 'ROMANIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_134':{
            'hover': 'RUSSIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_135':{
            'hover': 'RWANDA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_136':{
            'hover': 'SAUDI ARABIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_137':{
            'hover': 'SENEGAL','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_138':{
            'hover': 'SERBIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_139':{
            'hover': 'SEYCHELLES','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_140':{
            'hover': 'SIERRA LEONE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_141':{
            'hover': 'SINGAPORE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_142':{
            'hover': 'SLOVAKIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_143':{
            'hover': 'SLOVENIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_144':{
            'hover': 'SOLOMON ISLANDS','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_145':{
            'hover': 'SOMALIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_146':{
            'hover': 'SOUTH AFRICA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_147':{
            'hover': 'SOUTH KOREA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_148':{
            'hover': 'SOUTH SUDAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_149':{
            'hover': 'SPAIN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_150':{
            'hover': 'SRI LANKA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_151':{
            'hover': 'SUDAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_152':{
            'hover': 'SURINAME','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_153':{
            'hover': 'SWAZILAND','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_154':{
            'hover': 'SWEDEN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_155':{
            'hover': 'SWITZERLAND','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_156':{
            'hover': 'SYRIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_157':{
            'hover': 'S?O TOM? AND PR?NCIPE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_158':{
            'hover': 'TAIWAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_159':{
            'hover': 'TAJIKISTAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_160':{
            'hover': 'TANZANIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_161':{
            'hover': 'THAILAND','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_162':{
            'hover': 'THE GAMBIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_163':{
            'hover': 'TIMOR-LESTE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_164':{
            'hover': 'TOGO','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_165':{
            'hover': 'TUNISIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_166':{
            'hover': 'TURKEY','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_167':{
            'hover': 'TURKMENISTAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_168':{
            'hover': 'UGANDA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_169':{
            'hover': 'UKRAINE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_170':{
            'hover': 'UNITED ARAB EMIRATES','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_171':{
            'hover': 'UNITED KINGDOM','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_172':{
            'hover': 'UNITED STATES<br><span style="color: yellow;">*Link each country to any webpage*</span>','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_173':{
            'hover': 'URUGUAY','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_174':{
            'hover': 'UZBEKISTAN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_175':{
            'hover': 'VENEZUELA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_176':{
            'hover': 'VIETNAM','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_177':{
            'hover': 'WESTERN SAHARA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_178':{
            'hover': 'YEMEN','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_179':{
            'hover': 'ZAMBIA','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
        'map_180':{
            'hover': 'ZIMBABWE','upColor':'#eff9ff','overColor':'#ffcc5f','downColor':'#477cb2','enable':true,
        },
    };


var pin_config = {
        'default':{		'pinShadow':'#000',		'pinShadowOpacity':'50',	},
        'points':[

            {
                'shape':'circle',
                'hover': 'hangzhou, China',
                'pos_X':820,
                'pos_Y':185,
                'diameter':12,
                'outline':'#FFCECE',
                'thickness':1,
                'upColor':'#FF0000',
                'overColor':'#FFEE88',
                'downColor':'#D15B2C',
                'enable':true,
            },
            {
                'shape':'circle',
                'hover': 'Canada',
                'pos_X':150,
                'pos_Y':85,
                'diameter':12,
                'outline':'#FFCECE',
                'thickness':1,
                'upColor':'#FF0000',
                'overColor':'#FFEE88',
                'downColor':'#D15B2C',
                'enable':true,
            }
            ,
            {
                'shape':'circle',
                'hover': 'America',
                'pos_X':140,
                'pos_Y':145,
                'diameter':12,
                'outline':'#FFCECE',
                'thickness':1,
                'upColor':'#FF0000',
                'overColor':'#FFEE88',
                'downColor':'#D15B2C',
                'enable':true,
            },
            {
                'shape':'circle',
                'hover': 'Mexico',
                'pos_X':130,
                'pos_Y':205,
                'diameter':12,
                'outline':'#FFCECE',
                'thickness':1,
                'upColor':'#FF0000',
                'overColor':'#FFEE88',
                'downColor':'#D15B2C',
                'enable':true,
            }

        ]
    };
