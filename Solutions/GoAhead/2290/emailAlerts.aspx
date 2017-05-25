<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>
<% 
    // Settings
    string activeClient = "";
    int solutionID = 2290;
    int instrumentID = 1455;
    string feedURL = "http://go-uat.blacksunplc.com/en/media/news.rss";
    bool showLoginToUnsubscribe = true;
    bool showEuroInvestorDisclaimer = false;

    string[] RNSFilters = { "Select all", "Director Shareholding", "Dividends", "General Meetings", "Holding in Company", "Listing & Issue", "Results & Accounts" };
    string[] RNSFiltersGroup = { "allRNSnews", "RDS", "DIV", "NOA", "HOL", "BLR", "ACQ,FR,IR" };

    string titleRequiredField = "* denotes required field";
    string titleReleasesA = "Stock Exchange Announcement Alerts";
    string titleReleasesB = "";
    string titleReleasesC = "If you would like to be contacted, please tick this box.";
    //
    string titleFirstName = "First name";
    string titleLastName = "Surname";
    string titleCompany = "Company";
    string titleCountry = "Country";
    string titleOccupation = "Occupation";
    string titleProfession = "Profession";
    string titleEmailAdress = "Email&nbsp;address";

%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Email Alerts</title>

    <link rel="stylesheet" href="inc/generic.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/generic.css")).Ticks.ToString()%>" />
    <link rel="stylesheet" href="emailAlerts.css?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("emailAlerts.css")).Ticks.ToString()%>" />
    <link rel="stylesheet" href="inc/jquery-ui.css">

    <style type="text/css">
        .ui-autocomplete {
            padding: 0;
            list-style: none;
            background-color: #fff;
            width: 218px;
            border: 1px solid #B0BECA;
            max-height: 350px;
            overflow-x: hidden;
        }

            .ui-autocomplete .ui-menu-item {
                border-top: 1px solid #B0BECA;
                display: block;
                padding: 4px 6px;
                color: #353D44;
                cursor: pointer;
            }

                .ui-autocomplete .ui-menu-item:first-child {
                    border-top: none;
                }

                .ui-autocomplete .ui-menu-item.ui-state-focus {
                    background-color: #D5E5F4;
                    color: #161A1C;
                }

        .field.ui-autocomplete-input {
            width: 100%;
            text-indent: 2px;
            height: 23px;
        }
    </style>

</head>



<body>

    <div class="content IREmailAlerts">

        <div class="pageRegister">

 

            <div class="requiredField" style="">
                <span class="requiredFieldMSG"></span>
            </div>


            <div style="clear: both;"></div>
            <div class="divideLine" style="margin-top: 10px;"></div>

            <div class="blockOuter">

                <h2 class="header">Select the RNS News you would like to receive:</h2>

                <form action="emailAlerts.aspx">
                    <div class="subGroupContactInfoWrapper">
                        <%
                            Response.Write(@"<div class=""subGroup"">");
                            var filterGroupIndex = 0;
                            foreach (string filter in RNSFilters)
                            {
                                Response.Write(@"<div id=""" + RNSFiltersGroup[filterGroupIndex] + @""" enabledFilters=""" + RNSFiltersGroup[filterGroupIndex].Replace(",","") + @""" class=""checkbox checkboxRNSFilter"">" + filter + "</div>");
                                filterGroupIndex++;
                            }
                            Response.Write(@"<div class=""clearBoth""></div>");
                            Response.Write(@"</div>");
                        %>
                        <div class="blockOuter contactDetails">

                            <%--<h2 class="header">Your Contact Details</h2>--%>

                            <div class="blockInner" style="margin-top: 0;">
                                <div class="inputTextTitle">
                                    <%= titleEmailAdress %>
                                </div>
                                <div class="inputText">
                                    <input tabindex="1" class="clearOnUnsubscribe informationInput enterInformationEmailRNSFilter" name="enterInformationEmailRNSFilter" type="text" value="" id="enterInformationEmailRNSFilter" />
                                </div>
                                <div class="requiredSymbol">*</div>
                            </div>

                            <div class="blockInner">
                                <div class="inputTextTitle">
                                    First name 
                                </div>
                                <div class="inputText">
                                    <input tabindex="2" class="clearOnUnsubscribe informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                                </div>
                                <div class="requiredSymbol">*</div>
                            </div>

                            <div class="blockInner">
                                <div class="inputTextTitle">
                                    Surname 
                                </div>
                                <div class="inputText">
                                    <input tabindex="3" class="clearOnUnsubscribe informationInput enterInformationLastName" name="enterInformationLastName" type="text" value="" id="enterInformationLastName" />
                                </div>
                                <div class="requiredSymbol">*</div>
                            </div>

                            <div class="blockInner">
                                <div class="inputTextTitle">
                                    Country
                                </div>
                                <div class="field-wrapper inputText">
                                    <select tabindex="4" class="field" name="enterInformationCountry" placeholder="Type your country" id="enterInformationCountry" autofocus="autofocus" autocorrect="off" autocomplete="off">
                                        <%-- <select class="field" placeholder="Type your country" name="Country" id="country-selector" autofocus="autofocus" autocorrect="off" autocomplete="off">--%>
                                        <option value="" selected="selected">Select Country</option>
                                        <option value="afghanistan" data-alternative-spellings=AF افغانستان">Afghanistan</option>
                                        <option value="åland islands" data-alternative-spellings=AX Aaland Aland" data-relevancy-booster="0.5">Åland Islands</option>
                                        <option value="albania" data-alternative-spellings=AL">Albania</option>
                                        <option value="algeria" data-alternative-spellings=DZ الجزائر">Algeria</option>
                                        <option value="american samoa" data-alternative-spellings=AS" data-relevancy-booster="0.5">American Samoa</option>
                                        <option value="andorra" data-alternative-spellings=AD" data-relevancy-booster="0.5">Andorra</option>
                                        <option value="angola" data-alternative-spellings=AO">Angola</option>
                                        <option value="anguilla" data-alternative-spellings=AI" data-relevancy-booster="0.5">Anguilla</option>
                                        <option value="antarctica" data-alternative-spellings=AQ" data-relevancy-booster="0.5">Antarctica</option>
                                        <option value="antigua and barbuda" data-alternative-spellings=AG" data-relevancy-booster="0.5">Antigua And Barbuda</option>
                                        <option value="argentina" data-alternative-spellings=AR">Argentina</option>
                                        <option value="armenia" data-alternative-spellings=AM Հայաստան">Armenia</option>
                                        <option value="aruba" data-alternative-spellings=AW" data-relevancy-booster="0.5">Aruba</option>
                                        <option value="australia" data-alternative-spellings=AU" data-relevancy-booster="1.5">Australia</option>
                                        <option value="austria" data-alternative-spellings=AT Österreich Osterreich Oesterreich ">Austria</option>
                                        <option value="azerbaijan" data-alternative-spellings=AZ">Azerbaijan</option>
                                        <option value="bahamas" data-alternative-spellings=BS">Bahamas</option>
                                        <option value="bahrain" data-alternative-spellings=BH البحرين">Bahrain</option>
                                        <option value="bangladesh" data-alternative-spellings=BD বাংলাদেশ" data-relevancy-booster="2">Bangladesh</option>
                                        <option value="barbados" data-alternative-spellings=BB">Barbados</option>
                                        <option value="belarus" data-alternative-spellings=BY Беларусь">Belarus</option>
                                        <option value="belgium" data-alternative-spellings=BE België Belgie Belgien Belgique" data-relevancy-booster="1.5">Belgium</option>
                                        <option value="belize" data-alternative-spellings=BZ">Belize</option>
                                        <option value="benin" data-alternative-spellings=BJ">Benin</option>
                                        <option value="bermuda" data-alternative-spellings=BM" data-relevancy-booster="0.5">Bermuda</option>
                                        <option value="bhutan" data-alternative-spellings=BT भूटान">Bhutan</option>
                                        <option value="bolivia" data-alternative-spellings=BO">Bolivia</option>
                                        <option value="bonaire, sint eustatius and saba" data-alternative-spellings=BQ">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="bosnia and herzegovina" data-alternative-spellings=BA BiH Bosna i Hercegovina Босна и Херцеговина">Bosnia and Herzegovina</option>
                                        <option value="botswana" data-alternative-spellings=BW">Botswana</option>
                                        <option value="bouvet island" data-alternative-spellings=BV">Bouvet Island</option>
                                        <option value="brazil" data-alternative-spellings=BR Brasil" data-relevancy-booster="2">Brazil</option>
                                        <option value="british indian ocean territory" data-alternative-spellings=IO">British Indian Ocean Territory</option>
                                        <option value="brunei darussalam" data-alternative-spellings=BN">Brunei Darussalam</option>
                                        <option value="bulgaria" data-alternative-spellings=BG България">Bulgaria</option>
                                        <option value="burkina faso" data-alternative-spellings=BF">Burkina Faso</option>
                                        <option value="burundi" data-alternative-spellings=BI">Burundi</option>
                                        <option value="cambodia" data-alternative-spellings=KH កម្ពុជា">Cambodia</option>
                                        <option value="cameroon" data-alternative-spellings=CM">Cameroon</option>
                                        <option value="canada" data-alternative-spellings=CA" data-relevancy-booster="2">Canada</option>
                                        <option value="cape verde" data-alternative-spellings=CV Cabo">Cape Verde</option>
                                        <option value="cayman islands" data-alternative-spellings=KY" data-relevancy-booster="0.5">Cayman Islands</option>
                                        <option value="central african republic" data-alternative-spellings=CF">Central African Republic</option>
                                        <option value="chad" data-alternative-spellings=TD تشاد‎ Tchad">Chad</option>
                                        <option value="chile" data-alternative-spellings=CL">Chile</option>
                                        <option value="china" data-relevancy-booster="3.5" data-alternative-spellings=CN Zhongguo Zhonghua Peoples Republic 中国/中华">China</option>
                                        <option value="christmas island" data-alternative-spellings=CX" data-relevancy-booster="0.5">Christmas Island</option>
                                        <option value="cocos (keeling) islands" data-alternative-spellings=CC" data-relevancy-booster="0.5">Cocos (Keeling) Islands</option>
                                        <option value="colombia" data-alternative-spellings=CO">Colombia</option>
                                        <option value="comoros" data-alternative-spellings=KM جزر القمر">Comoros</option>
                                        <option value="congo" data-alternative-spellings=CG">Congo</option>
                                        <option value="congo, the democratic republic of the" data-alternative-spellings=CD Congo-Brazzaville Repubilika ya Kongo">Congo, the Democratic Republic of the</option>
                                        <option value="cook islands" data-alternative-spellings=CK" data-relevancy-booster="0.5">Cook Islands</option>
                                        <option value="costa rica" data-alternative-spellings=CR">Costa Rica</option>
                                        <option value="côte d'ivoire" data-alternative-spellings=CI Cote dIvoire">Côte d'Ivoire</option>
                                        <option value="croatia" data-alternative-spellings=HR Hrvatska">Croatia</option>
                                        <option value="cuba" data-alternative-spellings=CU">Cuba</option>
                                        <option value="curaçao" data-alternative-spellings=CW Curacao">Curaçao</option>
                                        <option value="cyprus" data-alternative-spellings=CY Κύπρος Kýpros Kıbrıs">Cyprus</option>
                                        <option value="czech republic" data-alternative-spellings=CZ Česká Ceska">Czech Republic</option>
                                        <option value="denmark" data-alternative-spellings=DK Danmark" data-relevancy-booster="1.5">Denmark</option>
                                        <option value="djibouti" data-alternative-spellings=DJ جيبوتي‎ Jabuuti Gabuuti">Djibouti</option>
                                        <option value="dominica" data-alternative-spellings=DM Dominique" data-relevancy-booster="0.5">Dominica</option>
                                        <option value="dominican republic" data-alternative-spellings=DO">Dominican Republic</option>
                                        <option value="ecuador" data-alternative-spellings=EC">Ecuador</option>
                                        <option value="egypt" data-alternative-spellings=EG" data-relevancy-booster="1.5">Egypt</option>
                                        <option value="el salvador" data-alternative-spellings=SV">El Salvador</option>
                                        <option value="equatorial guinea" data-alternative-spellings=GQ">Equatorial Guinea</option>
                                        <option value="eritrea" data-alternative-spellings=ER إرتريا ኤርትራ">Eritrea</option>
                                        <option value="estonia" data-alternative-spellings=EE Eesti">Estonia</option>
                                        <option value="ethiopia" data-alternative-spellings=ET ኢትዮጵያ">Ethiopia</option>
                                        <option value="falkland islands (malvinas)" data-alternative-spellings=FK" data-relevancy-booster="0.5">Falkland Islands (Malvinas)</option>
                                        <option value="faroe islands" data-alternative-spellings=FO Føroyar Færøerne" data-relevancy-booster="0.5">Faroe Islands</option>
                                        <option value="fiji" data-alternative-spellings=FJ Viti फ़िजी">Fiji</option>
                                        <option value="finland" data-alternative-spellings=FI Suomi">Finland</option>
                                        <option value="france" data-alternative-spellings=FR République française" data-relevancy-booster="2.5">France</option>
                                        <option value="french guiana" data-alternative-spellings=GF">French Guiana</option>
                                        <option value="french polynesia" data-alternative-spellings=PF Polynésie française">French Polynesia</option>
                                        <option value="french southern territories" data-alternative-spellings=TF">French Southern Territories</option>
                                        <option value="gabon" data-alternative-spellings=GA République Gabonaise">Gabon</option>
                                        <option value="gambia" data-alternative-spellings=GM">Gambia</option>
                                        <option value="georgia" data-alternative-spellings=GE საქართველო">Georgia</option>
                                        <option value="germany" data-alternative-spellings=DE Bundesrepublik Deutschland" data-relevancy-booster="3">Germany</option>
                                        <option value="ghana" data-alternative-spellings=GH">Ghana</option>
                                        <option value="gibraltar" data-alternative-spellings=GI" data-relevancy-booster="0.5">Gibraltar</option>
                                        <option value="greece" data-alternative-spellings=GR Ελλάδα" data-relevancy-booster="1.5">Greece</option>
                                        <option value="greenland" data-alternative-spellings=GL grønland" data-relevancy-booster="0.5">Greenland</option>
                                        <option value="grenada" data-alternative-spellings=GD">Grenada</option>
                                        <option value="guadeloupe" data-alternative-spellings=GP">Guadeloupe</option>
                                        <option value="guam" data-alternative-spellings=GU">Guam</option>
                                        <option value="guatemala" data-alternative-spellings=GT">Guatemala</option>
                                        <option value="guernsey" data-alternative-spellings=GG" data-relevancy-booster="0.5">Guernsey</option>
                                        <option value="guinea" data-alternative-spellings=GN">Guinea</option>
                                        <option value="guinea-bissau" data-alternative-spellings=GW">Guinea-Bissau</option>
                                        <option value="guyana" data-alternative-spellings=GY">Guyana</option>
                                        <option value="haiti" data-alternative-spellings=HT">Haiti</option>
                                        <option value="heard island and mcdonald islands" data-alternative-spellings=HM">Heard Island and McDonald Islands</option>
                                        <option value="holy see (vatican city state)" data-alternative-spellings=VA" data-relevancy-booster="0.5">Holy See (Vatican City State)</option>
                                        <option value="honduras" data-alternative-spellings=HN">Honduras</option>
                                        <option value="hong kong" data-alternative-spellings=HK 香港">Hong Kong</option>
                                        <option value="hungary" data-alternative-spellings=HU Magyarország">Hungary</option>
                                        <option value="iceland" data-alternative-spellings=IS Island">Iceland</option>
                                        <option value="india" data-alternative-spellings=IN भारत गणराज्य Hindustan" data-relevancy-booster="3">India</option>
                                        <option value="indonesia" data-alternative-spellings=ID" data-relevancy-booster="2">Indonesia</option>
                                        <option value="iran, islamic republic of" data-alternative-spellings=IR ایران">Iran, Islamic Republic of</option>
                                        <option value="iraq" data-alternative-spellings=IQ العراق‎">Iraq</option>
                                        <option value="ireland" data-alternative-spellings=IE Éire" data-relevancy-booster="1.2">Ireland</option>
                                        <option value="isle of man" data-alternative-spellings=IM" data-relevancy-booster="0.5">Isle of Man</option>
                                        <option value="israel" data-alternative-spellings=IL إسرائيل ישראל">Israel</option>
                                        <option value="italy" data-alternative-spellings=IT Italia" data-relevancy-booster="2">Italy</option>
                                        <option value="jamaica" data-alternative-spellings=JM">Jamaica</option>
                                        <option value="japan" data-alternative-spellings=JP Nippon Nihon 日本" data-relevancy-booster="2.5">Japan</option>
                                        <option value="jersey" data-alternative-spellings=JE" data-relevancy-booster="0.5">Jersey</option>
                                        <option value="jordan" data-alternative-spellings=JO الأردن">Jordan</option>
                                        <option value="kazakhstan" data-alternative-spellings=KZ Қазақстан Казахстан">Kazakhstan</option>
                                        <option value="kenya" data-alternative-spellings=KE">Kenya</option>
                                        <option value="kiribati" data-alternative-spellings=KI">Kiribati</option>
                                        <option value="korea, democratic people's republic of" data-alternative-spellings=KP North Korea">Korea, Democratic People's Republic of</option>
                                        <option value="korea, republic of" data-alternative-spellings=KR South Korea" data-relevancy-booster="1.5">Korea, Republic of</option>
                                        <option value="kuwait" data-alternative-spellings=KW الكويت">Kuwait</option>
                                        <option value="kyrgyzstan" data-alternative-spellings=KG Кыргызстан">Kyrgyzstan</option>
                                        <option value="lao people's democratic republic" data-alternative-spellings=LA">Lao People's Democratic Republic</option>
                                        <option value="latvia" data-alternative-spellings=LV Latvija">Latvia</option>
                                        <option value="lebanon" data-alternative-spellings=LB لبنان">Lebanon</option>
                                        <option value="lesotho" data-alternative-spellings=LS">Lesotho</option>
                                        <option value="liberia" data-alternative-spellings=LR">Liberia</option>
                                        <option value="libyan arab jamahiriya" data-alternative-spellings=LY ليبيا">Libyan Arab Jamahiriya</option>
                                        <option value="liechtenstein" data-alternative-spellings=LI">Liechtenstein</option>
                                        <option value="lithuania" data-alternative-spellings=LT Lietuva">Lithuania</option>
                                        <option value="luxembourg" data-alternative-spellings=LU">Luxembourg</option>
                                        <option value="macao" data-alternative-spellings=MO">Macao</option>
                                        <option value="macedonia, the former yugoslav republic of" data-alternative-spellings=MK Македонија">Macedonia, The Former Yugoslav Republic Of</option>
                                        <option value="madagascar" data-alternative-spellings=MG Madagasikara">Madagascar</option>
                                        <option value="malawi" data-alternative-spellings=MW">Malawi</option>
                                        <option value="malaysia" data-alternative-spellings=MY">Malaysia</option>
                                        <option value="maldives" data-alternative-spellings=MV">Maldives</option>
                                        <option value="mali" data-alternative-spellings=ML">Mali</option>
                                        <option value="malta" data-alternative-spellings=MT">Malta</option>
                                        <option value="marshall islands" data-alternative-spellings=MH" data-relevancy-booster="0.5">Marshall Islands</option>
                                        <option value="martinique" data-alternative-spellings=MQ">Martinique</option>
                                        <option value="mauritania" data-alternative-spellings=MR الموريتانية">Mauritania</option>
                                        <option value="mauritius" data-alternative-spellings=MU">Mauritius</option>
                                        <option value="mayotte" data-alternative-spellings=YT">Mayotte</option>
                                        <option value="mexico" data-alternative-spellings=MX Mexicanos" data-relevancy-booster="1.5">Mexico</option>
                                        <option value="micronesia, federated states of" data-alternative-spellings=FM">Micronesia, Federated States of</option>
                                        <option value="moldova, republic of" data-alternative-spellings=MD">Moldova, Republic of</option>
                                        <option value="monaco" data-alternative-spellings=MC">Monaco</option>
                                        <option value="mongolia" data-alternative-spellings=MN Mongγol ulus Монгол улс">Mongolia</option>
                                        <option value="montenegro" data-alternative-spellings=ME">Montenegro</option>
                                        <option value="montserrat" data-alternative-spellings=MS" data-relevancy-booster="0.5">Montserrat</option>
                                        <option value="morocco" data-alternative-spellings=MA المغرب">Morocco</option>
                                        <option value="mozambique" data-alternative-spellings=MZ Moçambique">Mozambique</option>
                                        <option value="myanmar" data-alternative-spellings=MM">Myanmar</option>
                                        <option value="namibia" data-alternative-spellings=NA Namibië">Namibia</option>
                                        <option value="nauru" data-alternative-spellings=NR Naoero" data-relevancy-booster="0.5">Nauru</option>
                                        <option value="nepal" data-alternative-spellings=NP नेपाल">Nepal</option>
                                        <option value="netherlands" data-alternative-spellings=NL Holland Nederland" data-relevancy-booster="1.5">Netherlands</option>
                                        <option value="new caledonia" data-alternative-spellings=NC" data-relevancy-booster="0.5">New Caledonia</option>
                                        <option value="new zealand" data-alternative-spellings=NZ Aotearoa">New Zealand</option>
                                        <option value="nicaragua" data-alternative-spellings=NI">Nicaragua</option>
                                        <option value="niger" data-alternative-spellings=NE Nijar">Niger</option>
                                        <option value="nigeria" data-alternative-spellings=NG Nijeriya Naíjíríà" data-relevancy-booster="1.5">Nigeria</option>
                                        <option value="niue" data-alternative-spellings=NU" data-relevancy-booster="0.5">Niue</option>
                                        <option value="norfolk island" data-alternative-spellings=NF" data-relevancy-booster="0.5">Norfolk Island</option>
                                        <option value="northern mariana islands" data-alternative-spellings=MP" data-relevancy-booster="0.5">Northern Mariana Islands</option>
                                        <option value="norway" data-alternative-spellings=NO Norge Noreg" data-relevancy-booster="1.5">Norway</option>
                                        <option value="oman" data-alternative-spellings=OM عمان">Oman</option>
                                        <option value="pakistan" data-alternative-spellings=PK پاکستان" data-relevancy-booster="2">Pakistan</option>
                                        <option value="palau" data-alternative-spellings=PW" data-relevancy-booster="0.5">Palau</option>
                                        <option value="palestinian territory, occupied" data-alternative-spellings=PS فلسطين">Palestinian Territory, Occupied</option>
                                        <option value="panama" data-alternative-spellings=PA">Panama</option>
                                        <option value="papua new guinea" data-alternative-spellings=PG">Papua New Guinea</option>
                                        <option value="paraguay" data-alternative-spellings=PY">Paraguay</option>
                                        <option value="peru" data-alternative-spellings=PE">Peru</option>
                                        <option value="philippines" data-alternative-spellings=PH Pilipinas" data-relevancy-booster="1.5">Philippines</option>
                                        <option value="pitcairn" data-alternative-spellings=PN" data-relevancy-booster="0.5">Pitcairn</option>
                                        <option value="poland" data-alternative-spellings=PL Polska" data-relevancy-booster="1.25">Poland</option>
                                        <option value="portugal" data-alternative-spellings=PT Portuguesa" data-relevancy-booster="1.5">Portugal</option>
                                        <option value="puerto rico" data-alternative-spellings=PR">Puerto Rico</option>
                                        <option value="qatar" data-alternative-spellings=QA قطر">Qatar</option>
                                        <option value="réunion" data-alternative-spellings=RE Reunion">Réunion</option>
                                        <option value="romania" data-alternative-spellings=RO Rumania Roumania România">Romania</option>
                                        <option value="russian federation" data-alternative-spellings=RU Rossiya Российская Россия" data-relevancy-booster="2.5">Russian Federation</option>
                                        <option value="rwanda" data-alternative-spellings=RW">Rwanda</option>
                                        <option value="saint barthélemy" data-alternative-spellings=BL St. Barthelemy">Saint Barthélemy</option>
                                        <option value="saint helena" data-alternative-spellings=SH St.">Saint Helena</option>
                                        <option value="saint kitts and nevis" data-alternative-spellings=KN St.">Saint Kitts and Nevis</option>
                                        <option value="saint lucia" data-alternative-spellings=LC St.">Saint Lucia</option>
                                        <option value="saint martin (french part)" data-alternative-spellings=MF St.">Saint Martin (French Part)</option>
                                        <option value="saint pierre and miquelon" data-alternative-spellings=PM St.">Saint Pierre and Miquelon</option>
                                        <option value="saint vincent and the grenadines" data-alternative-spellings=VC St.">Saint Vincent and the Grenadines</option>
                                        <option value="samoa" data-alternative-spellings=WS">Samoa</option>
                                        <option value="san marino" data-alternative-spellings=SM RSM Repubblica">San Marino</option>
                                        <option value="sao tome and principe" data-alternative-spellings=ST">Sao Tome and Principe</option>
                                        <option value="saudi arabia" data-alternative-spellings=SA السعودية">Saudi Arabia</option>
                                        <option value="senegal" data-alternative-spellings=SN Sénégal">Senegal</option>
                                        <option value="serbia" data-alternative-spellings=RS Србија Srbija">Serbia</option>
                                        <option value="seychelles" data-alternative-spellings=SC" data-relevancy-booster="0.5">Seychelles</option>
                                        <option value="sierra leone" data-alternative-spellings=SL">Sierra Leone</option>
                                        <option value="singapore" data-alternative-spellings=SG Singapura  சிங்கப்பூர் குடியரசு 新加坡共和国">Singapore</option>
                                        <option value="sint maarten (dutch part)" data-alternative-spellings=SX">Sint Maarten (Dutch Part)</option>
                                        <option value="slovakia" data-alternative-spellings=SK Slovenská Slovensko">Slovakia</option>
                                        <option value="slovenia" data-alternative-spellings=SI Slovenija">Slovenia</option>
                                        <option value="solomon islands" data-alternative-spellings=SB">Solomon Islands</option>
                                        <option value="somalia" data-alternative-spellings=SO الصومال">Somalia</option>
                                        <option value="south africa" data-alternative-spellings=ZA RSA Suid-Afrika">South Africa</option>
                                        <option value="south georgia and the south sandwich islands" data-alternative-spellings=GS">South Georgia and the South Sandwich Islands</option>
                                        <option value="south sudan" data-alternative-spellings=SS">South Sudan</option>
                                        <option value="spain" data-alternative-spellings=ES España" data-relevancy-booster="2">Spain</option>
                                        <option value="sri lanka" data-alternative-spellings=LK ශ්‍රී ලංකා இலங்கை Ceylon">Sri Lanka</option>
                                        <option value="sudan" data-alternative-spellings=SD السودان">Sudan</option>
                                        <option value="suriname" data-alternative-spellings=SR शर्नम् Sarnam Sranangron">Suriname</option>
                                        <option value="svalbard and jan mayen" data-alternative-spellings=SJ" data-relevancy-booster="0.5">Svalbard and Jan Mayen</option>
                                        <option value="swaziland" data-alternative-spellings=SZ weSwatini Swatini Ngwane">Swaziland</option>
                                        <option value="sweden" data-alternative-spellings=SE Sverige" data-relevancy-booster="1.5">Sweden</option>
                                        <option value="switzerland" data-alternative-spellings=CH Swiss Confederation Schweiz Suisse Svizzera Svizra" data-relevancy-booster="1.5">Switzerland</option>
                                        <option value="syrian arab republic" data-alternative-spellings=SY Syria سورية">Syrian Arab Republic</option>
                                        <option value="taiwan, province of china" data-alternative-spellings=TW 台灣 臺灣">Taiwan, Province of China</option>
                                        <option value="tajikistan" data-alternative-spellings=TJ Тоҷикистон Toçikiston">Tajikistan</option>
                                        <option value="tanzania, united republic of" data-alternative-spellings=TZ">Tanzania, United Republic of</option>
                                        <option value="thailand" data-alternative-spellings=TH ประเทศไทย Prathet Thai">Thailand</option>
                                        <option value="timor-leste" data-alternative-spellings=TL">Timor-Leste</option>
                                        <option value="togo" data-alternative-spellings=TG Togolese">Togo</option>
                                        <option value="tokelau" data-alternative-spellings=TK" data-relevancy-booster="0.5">Tokelau</option>
                                        <option value="tonga" data-alternative-spellings=TO">Tonga</option>
                                        <option value="trinidad and tobago" data-alternative-spellings=TT">Trinidad and Tobago</option>
                                        <option value="tunisia" data-alternative-spellings=TN تونس">Tunisia</option>
                                        <option value="turkey" data-alternative-spellings=TR Türkiye Turkiye">Turkey</option>
                                        <option value="turkmenistan" data-alternative-spellings=TM Türkmenistan">Turkmenistan</option>
                                        <option value="turks and caicos islands" data-alternative-spellings=TC" data-relevancy-booster="0.5">Turks and Caicos Islands</option>
                                        <option value="tuvalu" data-alternative-spellings=TV" data-relevancy-booster="0.5">Tuvalu</option>
                                        <option value="uganda" data-alternative-spellings=UG">Uganda</option>
                                        <option value="ukraine" data-alternative-spellings=UA Ukrayina Україна">Ukraine</option>
                                        <option value="united arab emirates" data-alternative-spellings=AE UAE الإمارات">United Arab Emirates</option>
                                        <option value="united kingdom" data-alternative-spellings=GB Great Britain England UK Wales Scotland Northern Ireland" data-relevancy-booster="2.5">United Kingdom</option>
                                        <option value="united states" data-relevancy-booster="3.5" data-alternative-spellings=US USA United States of America">United States</option>
                                        <option value="united states minor outlying islands" data-alternative-spellings=UM">United States Minor Outlying Islands</option>
                                        <option value="uruguay" data-alternative-spellings=UY">Uruguay</option>
                                        <option value="uzbekistan" data-alternative-spellings=UZ Ўзбекистон O'zbekstan O‘zbekiston">Uzbekistan</option>
                                        <option value="vanuatu" data-alternative-spellings=VU">Vanuatu</option>
                                        <option value="venezuela" data-alternative-spellings=VE">Venezuela</option>
                                        <option value="vietnam" data-alternative-spellings=VN Việt Nam" data-relevancy-booster="1.5">Vietnam</option>
                                        <option value="virgin islands, british" data-alternative-spellings=VG" data-relevancy-booster="0.5">Virgin Islands, British</option>
                                        <option value="virgin islands, u.s." data-alternative-spellings=VI" data-relevancy-booster="0.5">Virgin Islands, U.S.</option>
                                        <option value="wallis and futuna" data-alternative-spellings=WF" data-relevancy-booster="0.5">Wallis and Futuna</option>
                                        <option value="western sahara" data-alternative-spellings=EH لصحراء الغربية">Western Sahara</option>
                                        <option value="yemen" data-alternative-spellings=YE اليمن">Yemen</option>
                                        <option value="zambia" data-alternative-spellings=ZM">Zambia</option>
                                        <option value="zimbabwe" data-alternative-spellings=ZW">Zimbabwe</option>
                                    </select>
                                    
                                </div>
                                <div class="requiredSymbol">*</div>
                                <%--</div>--%>
                            </div>

                            <div class="blockInner">
                                <div class="inputTextTitle">
                                    Profession
                                </div>
                                <div class="inputText field"> 
                                    <select tabindex="5" name="enterInformationProfession" id="enterInformationProfession">
                                        <option value="na">Select profession</option>
                                        <option value="analyst">Analyst</option>
                                        <option value="broker">Broker</option>
                                        <option value="employee">Employee</option>
                                        <option value="fund manager">Fund manager</option>
                                        <option value="investor">Investor</option>
                                        <option value="journalist">Journalist</option>
                                        <option value="other">Other</option>
                                    </select>                              
                                </div>
                                <div class="requiredSymbol">*</div>
                            </div>
                        </div>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="divideLine"></div>
                    <div style="height:80px">
                        <h2 class="header" style="margin-bottom:8px;">Stay up to date with our latest company news and developments:</h2>
                        <div id="ReleaseRSS" class="checkbox">Press Releases</div>
                    </div>
                    
                    <div class="divideLine"></div>
                    <div class="blockOuter">
                        
                        <h2 class="header">
							<div class="loginText">If you are already subscribed to this service, please <a class="cleanLink OLDformUnsubscribe OLDunsubscribeNextToButton loginButton subheader3">Login</a></div>
							<div class="unsubscribeText" style="display:none;">If you do not want to receive any further alerts, please click here to <a class="cleanLink unsubscribeButton formUnsubscribe ">unsubscribe</a></div>
                        </h2>
                        <p>
                            From time to time we may email other information that we think could be of interest to you. If you would prefer not to receive this information please select the NO option from below.
                        </p>
                        <div class="subGroup">

									<label style="cursor:pointer;"><input type="radio" name="release" value="no"> No</label><br />
									<label style="cursor:pointer;"><input type="radio" name="release" value="checked" checked="checked"> Yes</label>


<%--                            <div id="ReleaseRSSTrigger" class="checkbox ReleaseRSS">Press Releases</div>
                            <div class="clearBoth"></div>--%>
                        </div>

                    </div>
                </form>
            </div>
            <div style="clear: both;"></div>


            <%--<div class="blockOuter">

                    <h2 class="header">Keep in contact
                    </h2>
                    <p>
                        From time to time we may email other information that we think could be of interest to you.<br />
                        If you prefer not to receive this information, please untick the option below.
                    </p>

                    <label>
                        <span class="checkboxOuter">
                            <input tabindex="6" type="checkbox" class="checkboxRelease ReleasesC" id="ReleasesC" checked="checked" />
                        </span>
                        <span class="checkBoxText">I would like to be contacted.
                        </span>
                    </label>

                </div>--%>

            <div class="blockOuter blockNoBorder pageVerification_placedAtSubmitbutton">
                <input type="button" tabindex="7" class="formRegister styledButton clearInput" value="Subscribe" />
                <%-- <a class="cleanLink formUnsubscribe unsubscribeNextToButton">Unsubscribe</a>--%>
            </div>


            <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
            <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
            <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
            <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />
            <input type="hidden" class="ReleaseRNSFilter" id="ReleaseRNSFilter" checked="checked" />
            <!--<input type="hidden" class="ReleaseRSS" id="ReleaseRSS" />-->
            <input type="hidden" id="feedURL" class="feedURL" value="<%= feedURL %>" />
            <input type="hidden" id="ReleasesC" checked="checked" />

           

        </div>
        <!-- pageRegister -->

        <div class="pageVerification">
            <div class="blockNoBorder noTopMargin">
                <h2>Verification...
                </h2>
                <p>
                </p>
            </div>
            <div class="block">
                <p class="bold">
                </p>
            </div>
        </div>
<!--
        <div class="pageUnsubscribe">

            <form action="emailalerts.aspx">

                <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
                <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
                <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />

                <div class="blockNoBorder">
                    <h2>Unsubscribe
                    </h2>
                    <p>
                        Please enter your email address to unsubscribe.
                    </p>

                    <div class="divider"></div>

                    <div class="blockInner">
                        <div class="inputTextTitle">
                            <%= titleEmailAdress %> *
                        </div>
                        <div class="inputText">
                            <input tabindex="1" class="inputTextField unsubscribeEmail" name="unsubscribeEmail" type="text" value="" />
                        </div>
                    </div>

                    <div class="divider"></div>

                    <div class="blockNoBorder">

                        <div class="divider"></div>
                        <div class="divider"></div>

                        <input class="formUnsubscribeInTool styledButton clearInput" type="submit" value="Unsubscribe" />
                        <a class="cleanLink goToHome">Back</a>
                    </div>

                </div>

            </form>

        </div>-->
        <div id="loginscreen" style="text-align:center;float:none;border:1px solid #cccccc;background-color:#f4f4f4;padding:20px;display:none;">
            <div style="min-width:280px;margin:auto">
                <div style="border:0px solid black;"><div>Please enter your e-mail address</div></div>
                <input  type="text" name="loginEmail" id="getUserInformationFromEmail" placeholder="" />
                <div style="margin-top:30px;border:0px solid black;">
                    <input id="loginscreen_loginButton" type="button" class="styledButton" value="Login" style="display:inline-block;margin-right:5px;">
                    <input id="loginscreen_cancelButton" type="button" class="styledButton" value="Cancel" style="display:inline-block;margin-left:5px;">
                </div>
            </div>
        </div>
        <div id="invalidemailscreen" style="text-align:center;float:none;border:1px solid #cccccc;background-color:#f4f4f4;padding:20px;display:none;">
            <div style="min-width:280px;margin:auto">
                <div style="border:0px solid black;color:red"><div>The email address is invalid, please try again</div></div>
                <div style="margin-top:30px;border:0px solid black;">
                    <input id="invalidemailscreen_tryAgainButton" type="button" class="styledButton" value="Try Again" style="display:inline-block;margin-right:5px;">
                    <input id="invalidemailscreen_cancelButton" type="button" class="styledButton" value="Cancel" style="display:inline-block;margin-left:5px;">
                </div>
            </div>
        </div>
        <div id="successfullysubscribedscreen" style="text-align:center;float:none;border:1px solid #cccccc;background-color:#f4f4f4;padding:20px;display:none;">
            <div style="min-width:280px;margin:auto">
                <div style="border:0px solid black;"><div>Thank you for registering your details to receive Go-Ahead news alerts. Please check your mailbox shortly for an email containing a link to activate your subscription</div></div>
                <div style="margin-top:30px;border:0px solid black;">
                    <input id="successfullysubscribedscreen_returnButton" type="button" class="styledButton" value="Return" style="display:inline-block;margin-right:5px;">
                </div>
            </div>
        </div>
        <div id="youarealreadydescribedscreen" style="text-align:center;float:none;border:1px solid #cccccc;background-color:#f4f4f4;padding:20px;display:none;">
            <div style="min-width:280px;margin:auto">
                <div style="border:0px solid black;color:red"><div>You are already subscribed. Please login to modify your subscription information</div></div>
                <div style="margin-top:30px;border:0px solid black;">
                    <input id="youarealreadydescribedscreen_returnButton" type="button" class="styledButton" value="Return" style="display:inline-block;margin-right:5px;">
                </div>
            </div>
        </div>
        <div id="successfullyupdatedscreen" style="text-align:center;float:none;border:1px solid #cccccc;background-color:#f4f4f4;padding:20px;display:none;">
            <div style="min-width:280px;margin:auto">
                <div style="border:0px solid black;"><div>Your subscription information has been updated</div></div>
                <div style="margin-top:30px;border:0px solid black;">
                    <input id="successfullyupdatedscreen_returnButton" type="button" class="styledButton" value="Return" style="display:inline-block;margin-right:5px;">
                </div>
            </div>
        </div>
        <div id="unsubscribescreen" style="text-align:center;float:none;border:1px solid #cccccc;background-color:#f4f4f4;padding:20px;display:none;">
            <div style="min-width:280px;margin:auto">
                <div style="border:0px solid black;"><div>Are you sure you want to unsubscribe?</div></div>
                <div style="margin-top:30px;border:0px solid black;">
                    <input id="unsubscribescreen_ok" type="button" class="styledButton" value="OK" style="display:inline-block;margin-right:5px;">
                    <input id="unsubscribescreen_cancel" type="button" class="styledButton" value="Cancel" style="display:inline-block;margin-left:5px;">
					<input tabindex="1" class="inputTextField unsubscribeEmail" name="unsubscribeEmail" type="hidden" value="" />
                </div>
            </div>
        </div>
        <div id="youhavenowbeenunsubscribed" style="text-align:center;float:none;border:1px solid #cccccc;background-color:#f4f4f4;padding:20px;display:none;">
            <div style="min-width:280px;margin:auto">
                <div style="border:0px solid black;"><div>Your subscription has been cancelled</div></div>
                <div style="margin-top:30px;border:0px solid black;">
                    <input id="youhavenowbeenunsubscribed_return" type="button" class="styledButton" value="Return" style="display:inline-block;margin-left:5px;">
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script type="text/javascript" src="inc/jquery-ui.min.js"></script>
    <script type="text/javascript" src="inc/jquery.select-to-autocomplete.js"></script>
	
	<script type="text/javascript">
	
			function doesUserAlreadyExist()
			{
				var userDoesAlreadyExist=false;
				var getUserInformationFromEmail = $('#enterInformationEmailRNSFilter').val();
                $.ajax({
                    url: '../../../Tools/EmailAlertsWithPush/EmailAlertsManager.aspx?action=getuserinformation&solutionID=2290&ts=' + (new Date).getTime(),
                    type: "POST",
                    dataType: "json",
                    cache: false,
                    data: {
                        getUserInformationFromEmail: getUserInformationFromEmail
                    },
                    success: function (userData) {
                        if ((userData.userExist+'') == 'True') {
							userDoesAlreadyExist=true;
                        }
                    }
                });
				return userDoesAlreadyExist;
			}
	</script>
	
    <script type="text/javascript" src="inc/genericIR_mobileOverlayFix.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/genericIR_mobileOverlayFix.js")).Ticks.ToString()%>"></script>
    <script type="text/javascript" src="inc/checkbox.js?v=<%=System.IO.File.GetLastWriteTime(System.Web.HttpContext.Current.Server.MapPath("inc/checkbox.js")).Ticks.ToString()%>"></script>

    <script type="text/javascript">

        (function ($) {

            $(function () {
                $('select.field').selectToAutocomplete();
                $('form').submit(function () {
                    return false;
                });
            });
			
			
            $('.loginButton').click(function () {
				$('.requiredFieldMSG').html('');
                $('#loginscreen').show();
                $('.blockOuter').hide();
            });
            $('#youarealreadydescribedscreen_returnButton').click(function () {
                $('.blockOuter').show();
                $('#youarealreadydescribedscreen').hide();
            });
            $('#successfullyupdatedscreen_returnButton').click(function () {
                $('.blockOuter').show();
                $('#successfullyupdatedscreen').hide();
            });
            
            $('#successfullysubscribedscreen_returnButton').click(function () {
                $('.blockOuter').show();
                $('#successfullysubscribedscreen').hide();
				
				$('.checkbox').removeClass('checked');
				$('#enterInformationCountry').parent().find("input[placeholder='Type your country']").val('');
				$('#enterInformationProfession option[value=na]').attr('selected', 'selected');
				$('.loginText').show();
				$('.unsubscribeText').hide();
				$('.clearOnUnsubscribe').val('');
            });
            
            $('#invalidemailscreen_tryAgainButton').click(function () {
                $('#loginscreen').show();
                $('#invalidemailscreen').hide();
                $('.blockOuter').hide();
            });

            $('#invalidemailscreen_cancelButton').click(function () {
                $('#loginscreen').hide(); 
                $('#invalidemailscreen').hide();
                $('.blockOuter').show();
				$('.loginText').show();
				$('.unsubscribeText').hide();
            });
			
			$('.formUnsubscribe').click(function ()
			{
                $('#unsubscribescreen').show(); 
                $('.blockOuter').hide();
				$('.unsubscribeEmail').val($('.enterInformationEmailRNSFilter').val());
				
			});
            $('#unsubscribescreen_ok').click(function () {
				retrieveAndPostValues();
                $('#unsubscribescreen').hide(); 
                $('#youhavenowbeenunsubscribed').show(); 
            });
            $('#youhavenowbeenunsubscribed_return').click(function () {
				retrieveAndPostValues();
                $('#youhavenowbeenunsubscribed').hide(); 
                $('.blockOuter').show();
				$('.clearOnUnsubscribe').val('');
				$('.checkbox').removeClass('checked');
				$('#enterInformationCountry').parent().find("input[placeholder='Type your country']").val('');
				$('#enterInformationProfession option[value=na]').attr('selected', 'selected');
				$('.loginText').show();
				$('.unsubscribeText').hide();
            });
			
			
            $('#unsubscribescreen_cancel').click(function () {
                $('#unsubscribescreen').hide(); 
                $('.blockOuter').show();
            });

			
            $('#loginscreen_loginButton').click(function () {
                var getUserInformationFromEmail = $('#getUserInformationFromEmail').val();
                $.ajax({
                    url: '../../../Tools/EmailAlertsWithPush/EmailAlertsManager.aspx?action=getuserinformation&solutionID=2290&ts=' + (new Date).getTime(),
                    //url: 'http://localhost:61531/EmailAlertsManager.aspx?action=getuserinformation&solutionID=2290&ts=' + (new Date).getTime(),
                    type: "POST",
                    dataType: "json",
                    cache: false,
                    data: {
                        getUserInformationFromEmail: getUserInformationFromEmail
                    },
                    success: function (userData) {
                        if ((userData.userExist+'') == 'True') {
                            $('#enterInformationEmailRNSFilter').val(userData.optional_email);
                            $('#enterInformationFirstName').val(userData.optional_firstname);
                            $('#enterInformationLastName').val(userData.optional_lastname);
                            var country = userData.optional_country + '';
                            if (country.length > 1) {
                                $('#enterInformationCountry').parent().find("input[placeholder='Type your country']").val(userData.optional_country.charAt(0).toUpperCase() + userData.optional_country.slice(1));
                                var countrySelector = '#enterInformationCountry option[value="' + userData.optional_country + '"]';
                                $(countrySelector).attr('selected', 'selected');
                            }

                            $('#enterInformationProfession option[value=' + userData.optional_profession + ']').attr('selected', 'selected');
                            var rnsFilter = userData.rnsCategories.split(',');
                            $('.checkbox').removeClass('checked');
                            for (count = 0; count < rnsFilter.length; count++) {
                                $('#' + rnsFilter[count].toUpperCase()).addClass('checked');
                                if (rnsFilter[count].toUpperCase() == 'ACQ' || rnsFilter[count].toUpperCase() == 'FR' || rnsFilter[count].toUpperCase() == 'IR') {
                                    $(".checkboxRNSFilter[enabledfilters=ACQFRIR]").addClass('checked');
                                }
                            }

                            var releaseCEnabled = userData.releaseCEnabled;
                            if (releaseCEnabled == 'True') {
                                $('input[name=release]').parent().find('input[value=checked]').click();
                            } else {
                                $('input[name=release]').parent().find('input[value=no]').click();
                            }
                            var rssEnabled = userData.rssEnabled;
                            if (rssEnabled == 'True') {
                                $('#ReleaseRSS').addClass('checked');
                            } else {
                                $('#ReleaseRSS').removeClass('checked');
                            }

                            $('#loginscreen').hide();
                            $('.blockOuter').show();
						$('.loginText').hide();
						$('.unsubscribeText').show();
						$('input.formRegister').val('Update Information');
                        } else {
                            //If user does not exists
                            $('#loginscreen').hide();
                            $('#invalidemailscreen').show();
                        }
						
						
                    }
                });

            });
			
			
            $('#loginscreen_cancelButton').click(function () {
                $('#loginscreen').hide();
                $('.blockOuter').show();
            });

			
				
				$('input[name=release]').change(function(){
				    var clickedRadiobutton = $('input[name=release]:checked').val();
				    if (clickedRadiobutton == 'checked') {
				        $('#ReleasesC').attr('checked', 'checked');
					} else {
				        $('#ReleasesC').removeAttr('checked');
					}
						
				
				});
        })(jQuery);


        /* Check required input fields from GenericIR */
        function checkInputFields() {
			var isSubscribedToAnyNews=false;
			var hasFilledInputs=false;
			$(".checkboxRNSFilter").each(
			    function(){
				    if($(this).hasClass('checked'))
				    {
					    isSubscribedToAnyNews=true;
				    }
			    });

			if ($('input[name=release]:checked').val() == 'checked') {
				//isSubscribedToAnyNews=true;
			}

            // Allow subscribers to only sign up for RSS
			if ($('#ReleaseRSS').hasClass('checked')) {
			    isSubscribedToAnyNews = true;
			}
			
			var profession=$('#enterInformationProfession option:selected').val();
			
			if(profession!='' && profession!='na' && $('#enterInformationEmailRNSFilter').val().length>0 && $('#enterInformationFirstName').val().length>0 && $('#enterInformationLastName').val().length>0 && $('#enterInformationCountry').val().length>0)

            {
				hasFilledInputs=true;
			}
			
			var validateFields=true;
			
			var requiredFieldMSG='';
			if(!isSubscribedToAnyNews){
				validateFields=false;
				requiredFieldMSG='Please select at least one of the alerts';
			}
			else {
				if(!hasFilledInputs){
					validateFields=false;
					requiredFieldMSG='Please verify all required fields!';
				}
			}
			$('.requiredFieldMSG').html(requiredFieldMSG);
			return validateFields;
        }
    </script>
</body>
</html>
