<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ OutputCache VaryByParam="*" Duration="1" %>
<% 
    // Settings
    string activeClient = "";
    int solutionID = 2290;
    int instrumentID = 1455;
    string feedURL = "http://www.go-ahead.com/en/media/news.rss";
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
    string titleEmailAdress = "Email address";

%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Email Alerts</title>

    <%--<link rel="stylesheet" href="//cloud.typography.com/7594474/696708/css/fonts.css" />--%>
    <link rel="stylesheet" href="http://ir1.euroinvestor.com/ir/tools/EmailAlertsWithPush/inc/generic.css" />
    <link rel="stylesheet" href="emailAlerts.css?v=145087256227" />
    <link rel="stylesheet" href="jquery-ui.css">

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

    <div class="content">

        <div class="pageRegister">

            <div style="clear: both;"></div>
            <div class="divider"></div>

            <p class="requiredField">
                <span class="requiredFieldMSG"></span>
            </p>


            <div style="clear: both;"></div>
            <div class="divideLine" style="margin-top: 0;"></div>

            <div class="blockOuter">

                <h2 class="header">Select the RNS News you would like to receive:
                </h2>

                <form action="emailAlerts.aspx">
                    <div class="subGroupContactInfoWrapper">
                        <%
                            Response.Write(@"<div class=""subGroup"">");
                            var filterGroupIndex = 0;
                            foreach (string filter in RNSFilters)
                            {
                                Response.Write(@"<div id=""" + RNSFiltersGroup[filterGroupIndex] + @""" class=""checkbox checkboxRNSFilter"">" + filter + "</div>");
                                filterGroupIndex++;
                            }
                            Response.Write(@"<div class=""clearBoth""></div>");
                            Response.Write(@"</div>");
                        %>
                        <div class="blockOuter contactDetails">

                            <%--<h2 class="header">Your Contact Details</h2>--%>

                            <div class="blockInner" style="margin-top: 0;">
                                <div class="inputTextTitle">
                                    <%= titleEmailAdress %> *
                                </div>
                                <div class="inputText">
                                    <input tabindex="1" class="informationInput enterInformationEmailRNSFilter" name="enterInformationEmailRNSFilter" type="text" value="" id="enterInformationEmailRNSFilter" />
                                </div>
                            </div>

                            <div class="blockInner">
                                <div class="inputTextTitle">
                                    First name *
                                </div>
                                <div class="inputText">
                                    <input tabindex="2" class="informationInput enterInformationFirstName" name="enterInformationFirstName" type="text" value="" id="enterInformationFirstName" />
                                </div>
                            </div>

                            <div class="blockInner">
                                <div class="inputTextTitle">
                                    Surname *
                                </div>
                                <div class="inputText">
                                    <input tabindex="3" class="informationInput enterInformationLastName" name="enterInformationLastName" type="text" value="" id="enterInformationLastName" />
                                </div>
                            </div>

                            <div class="blockInner">
                                <div class="inputTextTitle">
                                    Country *
                                </div>
                                <%--<div class="inputText">--%>
                                <%--<select  tabindex="4" name="enterInformationCountry" id="enterInformationCountry">
			                    <option value="na">Select country</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Arctic Ocean">Arctic Ocean</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Ashmore and Cartier Islands">Ashmore and Cartier Islands</option>
                                <option value="Atlantic Ocean">Atlantic Ocean</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Baker Island">Baker Island</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Bassas da India">Bassas da India</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Virgin Islands">British Virgin Islands</option>
                                <option value="Brunei">Brunei</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Clipperton Island">Clipperton Island</option>
                                <option value="Cocos Islands">Cocos Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Coral Sea Islands">Coral Sea Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="East Timor">East Timor</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Europa Island">Europa Island</option>
                                <option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Gaza Strip">Gaza Strip</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Glorioso Islands">Glorioso Islands</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Howland Island">Howland Island</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indian Ocean">Indian Ocean</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran">Iran</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Jan Mayen">Jan Mayen</option>
                                <option value="Japan">Japan</option>
                                <option value="Jarvis Island">Jarvis Island</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Johnston Atoll">Johnston Atoll</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Juan de Nova Island">Juan de Nova Island</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kerguelen Archipelago">Kerguelen Archipelago</option>
                                <option value="Kingman Reef">Kingman Reef</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Laos">Laos</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libya">Libya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macau">Macau</option>
                                <option value="Macedonia">Macedonia</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia">Micronesia</option>
                                <option value="Midway Islands">Midway Islands</option>
                                <option value="Moldova">Moldova</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Navassa Island">Navassa Island</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="North Korea">North Korea</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pacific Ocean">Pacific Ocean</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palmyra Atoll">Palmyra Atoll</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paracel Islands">Paracel Islands</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn Islands">Pitcairn Islands</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Republic of the Congo">Republic of the Congo</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russia">Russia</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                <option value="South Korea">South Korea</option>
                                <option value="Spain">Spain</option>
                                <option value="Spratly Islands">Spratly Islands</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard">Svalbard</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syria">Syria</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tromelin Island">Tromelin Island</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="USA">USA</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands">Virgin Islands</option>
                                <option value="Wake Island">Wake Island</option>
                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                <option value="West Bank">West Bank</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Yugoslavia">Yugoslavia</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
		                    </select>--%>

                                <div class="field-wrapper inputText">
                                    <select tabindex="4" class="field" name="enterInformationCountry" placeholder="Type your country" id="enterInformationCountry" autofocus="autofocus" autocorrect="off" autocomplete="off">
                                        <%-- <select class="field" placeholder="Type your country" name="Country" id="country-selector" autofocus="autofocus" autocorrect="off" autocomplete="off">--%>
                                        <option value="" selected="selected">Select Country</option>
                                        <option value="Afghanistan" data-alternative-spellings="AF افغانستان">Afghanistan</option>
                                        <option value="Åland Islands" data-alternative-spellings="AX Aaland Aland" data-relevancy-booster="0.5">Åland Islands</option>
                                        <option value="Albania" data-alternative-spellings="AL">Albania</option>
                                        <option value="Algeria" data-alternative-spellings="DZ الجزائر">Algeria</option>
                                        <option value="American Samoa" data-alternative-spellings="AS" data-relevancy-booster="0.5">American Samoa</option>
                                        <option value="Andorra" data-alternative-spellings="AD" data-relevancy-booster="0.5">Andorra</option>
                                        <option value="Angola" data-alternative-spellings="AO">Angola</option>
                                        <option value="Anguilla" data-alternative-spellings="AI" data-relevancy-booster="0.5">Anguilla</option>
                                        <option value="Antarctica" data-alternative-spellings="AQ" data-relevancy-booster="0.5">Antarctica</option>
                                        <option value="Antigua And Barbuda" data-alternative-spellings="AG" data-relevancy-booster="0.5">Antigua And Barbuda</option>
                                        <option value="Argentina" data-alternative-spellings="AR">Argentina</option>
                                        <option value="Armenia" data-alternative-spellings="AM Հայաստան">Armenia</option>
                                        <option value="Aruba" data-alternative-spellings="AW" data-relevancy-booster="0.5">Aruba</option>
                                        <option value="Australia" data-alternative-spellings="AU" data-relevancy-booster="1.5">Australia</option>
                                        <option value="Austria" data-alternative-spellings="AT Österreich Osterreich Oesterreich ">Austria</option>
                                        <option value="Azerbaijan" data-alternative-spellings="AZ">Azerbaijan</option>
                                        <option value="Bahamas" data-alternative-spellings="BS">Bahamas</option>
                                        <option value="Bahrain" data-alternative-spellings="BH البحرين">Bahrain</option>
                                        <option value="Bangladesh" data-alternative-spellings="BD বাংলাদেশ" data-relevancy-booster="2">Bangladesh</option>
                                        <option value="Barbados" data-alternative-spellings="BB">Barbados</option>
                                        <option value="Belarus" data-alternative-spellings="BY Беларусь">Belarus</option>
                                        <option value="Belgium" data-alternative-spellings="BE België Belgie Belgien Belgique" data-relevancy-booster="1.5">Belgium</option>
                                        <option value="Belize" data-alternative-spellings="BZ">Belize</option>
                                        <option value="Benin" data-alternative-spellings="BJ">Benin</option>
                                        <option value="Bermuda" data-alternative-spellings="BM" data-relevancy-booster="0.5">Bermuda</option>
                                        <option value="Bhutan" data-alternative-spellings="BT भूटान">Bhutan</option>
                                        <option value="Bolivia" data-alternative-spellings="BO">Bolivia</option>
                                        <option value="Bonaire, Sint Eustatius and Saba" data-alternative-spellings="BQ">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="Bosnia and Herzegovina" data-alternative-spellings="BA BiH Bosna i Hercegovina Босна и Херцеговина">Bosnia and Herzegovina</option>
                                        <option value="Botswana" data-alternative-spellings="BW">Botswana</option>
                                        <option value="Bouvet Island" data-alternative-spellings="BV">Bouvet Island</option>
                                        <option value="Brazil" data-alternative-spellings="BR Brasil" data-relevancy-booster="2">Brazil</option>
                                        <option value="British Indian Ocean Territory" data-alternative-spellings="IO">British Indian Ocean Territory</option>
                                        <option value="Brunei Darussalam" data-alternative-spellings="BN">Brunei Darussalam</option>
                                        <option value="Bulgaria" data-alternative-spellings="BG България">Bulgaria</option>
                                        <option value="Burkina Faso" data-alternative-spellings="BF">Burkina Faso</option>
                                        <option value="Burundi" data-alternative-spellings="BI">Burundi</option>
                                        <option value="Cambodia" data-alternative-spellings="KH កម្ពុជា">Cambodia</option>
                                        <option value="Cameroon" data-alternative-spellings="CM">Cameroon</option>
                                        <option value="Canada" data-alternative-spellings="CA" data-relevancy-booster="2">Canada</option>
                                        <option value="Cape Verde" data-alternative-spellings="CV Cabo">Cape Verde</option>
                                        <option value="Cayman Islands" data-alternative-spellings="KY" data-relevancy-booster="0.5">Cayman Islands</option>
                                        <option value="Central African Republic" data-alternative-spellings="CF">Central African Republic</option>
                                        <option value="Chad" data-alternative-spellings="TD تشاد‎ Tchad">Chad</option>
                                        <option value="Chile" data-alternative-spellings="CL">Chile</option>
                                        <option value="China" data-relevancy-booster="3.5" data-alternative-spellings="CN Zhongguo Zhonghua Peoples Republic 中国/中华">China</option>
                                        <option value="Christmas Island" data-alternative-spellings="CX" data-relevancy-booster="0.5">Christmas Island</option>
                                        <option value="Cocos (Keeling) Islands" data-alternative-spellings="CC" data-relevancy-booster="0.5">Cocos (Keeling) Islands</option>
                                        <option value="Colombia" data-alternative-spellings="CO">Colombia</option>
                                        <option value="Comoros" data-alternative-spellings="KM جزر القمر">Comoros</option>
                                        <option value="Congo" data-alternative-spellings="CG">Congo</option>
                                        <option value="Congo, the Democratic Republic of the" data-alternative-spellings="CD Congo-Brazzaville Repubilika ya Kongo">Congo, the Democratic Republic of the</option>
                                        <option value="Cook Islands" data-alternative-spellings="CK" data-relevancy-booster="0.5">Cook Islands</option>
                                        <option value="Costa Rica" data-alternative-spellings="CR">Costa Rica</option>
                                        <option value="Côte d'Ivoire" data-alternative-spellings="CI Cote dIvoire">Côte d'Ivoire</option>
                                        <option value="Croatia" data-alternative-spellings="HR Hrvatska">Croatia</option>
                                        <option value="Cuba" data-alternative-spellings="CU">Cuba</option>
                                        <option value="Curaçao" data-alternative-spellings="CW Curacao">Curaçao</option>
                                        <option value="Cyprus" data-alternative-spellings="CY Κύπρος Kýpros Kıbrıs">Cyprus</option>
                                        <option value="Czech Republic" data-alternative-spellings="CZ Česká Ceska">Czech Republic</option>
                                        <option value="Denmark" data-alternative-spellings="DK Danmark" data-relevancy-booster="1.5">Denmark</option>
                                        <option value="Djibouti" data-alternative-spellings="DJ جيبوتي‎ Jabuuti Gabuuti">Djibouti</option>
                                        <option value="Dominica" data-alternative-spellings="DM Dominique" data-relevancy-booster="0.5">Dominica</option>
                                        <option value="Dominican Republic" data-alternative-spellings="DO">Dominican Republic</option>
                                        <option value="Ecuador" data-alternative-spellings="EC">Ecuador</option>
                                        <option value="Egypt" data-alternative-spellings="EG" data-relevancy-booster="1.5">Egypt</option>
                                        <option value="El Salvador" data-alternative-spellings="SV">El Salvador</option>
                                        <option value="Equatorial Guinea" data-alternative-spellings="GQ">Equatorial Guinea</option>
                                        <option value="Eritrea" data-alternative-spellings="ER إرتريا ኤርትራ">Eritrea</option>
                                        <option value="Estonia" data-alternative-spellings="EE Eesti">Estonia</option>
                                        <option value="Ethiopia" data-alternative-spellings="ET ኢትዮጵያ">Ethiopia</option>
                                        <option value="Falkland Islands (Malvinas)" data-alternative-spellings="FK" data-relevancy-booster="0.5">Falkland Islands (Malvinas)</option>
                                        <option value="Faroe Islands" data-alternative-spellings="FO Føroyar Færøerne" data-relevancy-booster="0.5">Faroe Islands</option>
                                        <option value="Fiji" data-alternative-spellings="FJ Viti फ़िजी">Fiji</option>
                                        <option value="Finland" data-alternative-spellings="FI Suomi">Finland</option>
                                        <option value="France" data-alternative-spellings="FR République française" data-relevancy-booster="2.5">France</option>
                                        <option value="French Guiana" data-alternative-spellings="GF">French Guiana</option>
                                        <option value="French Polynesia" data-alternative-spellings="PF Polynésie française">French Polynesia</option>
                                        <option value="French Southern Territories" data-alternative-spellings="TF">French Southern Territories</option>
                                        <option value="Gabon" data-alternative-spellings="GA République Gabonaise">Gabon</option>
                                        <option value="Gambia" data-alternative-spellings="GM">Gambia</option>
                                        <option value="Georgia" data-alternative-spellings="GE საქართველო">Georgia</option>
                                        <option value="Germany" data-alternative-spellings="DE Bundesrepublik Deutschland" data-relevancy-booster="3">Germany</option>
                                        <option value="Ghana" data-alternative-spellings="GH">Ghana</option>
                                        <option value="Gibraltar" data-alternative-spellings="GI" data-relevancy-booster="0.5">Gibraltar</option>
                                        <option value="Greece" data-alternative-spellings="GR Ελλάδα" data-relevancy-booster="1.5">Greece</option>
                                        <option value="Greenland" data-alternative-spellings="GL grønland" data-relevancy-booster="0.5">Greenland</option>
                                        <option value="Grenada" data-alternative-spellings="GD">Grenada</option>
                                        <option value="Guadeloupe" data-alternative-spellings="GP">Guadeloupe</option>
                                        <option value="Guam" data-alternative-spellings="GU">Guam</option>
                                        <option value="Guatemala" data-alternative-spellings="GT">Guatemala</option>
                                        <option value="Guernsey" data-alternative-spellings="GG" data-relevancy-booster="0.5">Guernsey</option>
                                        <option value="Guinea" data-alternative-spellings="GN">Guinea</option>
                                        <option value="Guinea-Bissau" data-alternative-spellings="GW">Guinea-Bissau</option>
                                        <option value="Guyana" data-alternative-spellings="GY">Guyana</option>
                                        <option value="Haiti" data-alternative-spellings="HT">Haiti</option>
                                        <option value="Heard Island and McDonald Islands" data-alternative-spellings="HM">Heard Island and McDonald Islands</option>
                                        <option value="Holy See (Vatican City State)" data-alternative-spellings="VA" data-relevancy-booster="0.5">Holy See (Vatican City State)</option>
                                        <option value="Honduras" data-alternative-spellings="HN">Honduras</option>
                                        <option value="Hong Kong" data-alternative-spellings="HK 香港">Hong Kong</option>
                                        <option value="Hungary" data-alternative-spellings="HU Magyarország">Hungary</option>
                                        <option value="Iceland" data-alternative-spellings="IS Island">Iceland</option>
                                        <option value="India" data-alternative-spellings="IN भारत गणराज्य Hindustan" data-relevancy-booster="3">India</option>
                                        <option value="Indonesia" data-alternative-spellings="ID" data-relevancy-booster="2">Indonesia</option>
                                        <option value="Iran, Islamic Republic of" data-alternative-spellings="IR ایران">Iran, Islamic Republic of</option>
                                        <option value="Iraq" data-alternative-spellings="IQ العراق‎">Iraq</option>
                                        <option value="Ireland" data-alternative-spellings="IE Éire" data-relevancy-booster="1.2">Ireland</option>
                                        <option value="Isle of Man" data-alternative-spellings="IM" data-relevancy-booster="0.5">Isle of Man</option>
                                        <option value="Israel" data-alternative-spellings="IL إسرائيل ישראל">Israel</option>
                                        <option value="Italy" data-alternative-spellings="IT Italia" data-relevancy-booster="2">Italy</option>
                                        <option value="Jamaica" data-alternative-spellings="JM">Jamaica</option>
                                        <option value="Japan" data-alternative-spellings="JP Nippon Nihon 日本" data-relevancy-booster="2.5">Japan</option>
                                        <option value="Jersey" data-alternative-spellings="JE" data-relevancy-booster="0.5">Jersey</option>
                                        <option value="Jordan" data-alternative-spellings="JO الأردن">Jordan</option>
                                        <option value="Kazakhstan" data-alternative-spellings="KZ Қазақстан Казахстан">Kazakhstan</option>
                                        <option value="Kenya" data-alternative-spellings="KE">Kenya</option>
                                        <option value="Kiribati" data-alternative-spellings="KI">Kiribati</option>
                                        <option value="Korea, Democratic People's Republic of" data-alternative-spellings="KP North Korea">Korea, Democratic People's Republic of</option>
                                        <option value="Korea, Republic of" data-alternative-spellings="KR South Korea" data-relevancy-booster="1.5">Korea, Republic of</option>
                                        <option value="Kuwait" data-alternative-spellings="KW الكويت">Kuwait</option>
                                        <option value="Kyrgyzstan" data-alternative-spellings="KG Кыргызстан">Kyrgyzstan</option>
                                        <option value="Lao People's Democratic Republic" data-alternative-spellings="LA">Lao People's Democratic Republic</option>
                                        <option value="Latvia" data-alternative-spellings="LV Latvija">Latvia</option>
                                        <option value="Lebanon" data-alternative-spellings="LB لبنان">Lebanon</option>
                                        <option value="Lesotho" data-alternative-spellings="LS">Lesotho</option>
                                        <option value="Liberia" data-alternative-spellings="LR">Liberia</option>
                                        <option value="Libyan Arab Jamahiriya" data-alternative-spellings="LY ليبيا">Libyan Arab Jamahiriya</option>
                                        <option value="Liechtenstein" data-alternative-spellings="LI">Liechtenstein</option>
                                        <option value="Lithuania" data-alternative-spellings="LT Lietuva">Lithuania</option>
                                        <option value="Luxembourg" data-alternative-spellings="LU">Luxembourg</option>
                                        <option value="Macao" data-alternative-spellings="MO">Macao</option>
                                        <option value="Macedonia, The Former Yugoslav Republic Of" data-alternative-spellings="MK Македонија">Macedonia, The Former Yugoslav Republic Of</option>
                                        <option value="Madagascar" data-alternative-spellings="MG Madagasikara">Madagascar</option>
                                        <option value="Malawi" data-alternative-spellings="MW">Malawi</option>
                                        <option value="Malaysia" data-alternative-spellings="MY">Malaysia</option>
                                        <option value="Maldives" data-alternative-spellings="MV">Maldives</option>
                                        <option value="Mali" data-alternative-spellings="ML">Mali</option>
                                        <option value="Malta" data-alternative-spellings="MT">Malta</option>
                                        <option value="Marshall Islands" data-alternative-spellings="MH" data-relevancy-booster="0.5">Marshall Islands</option>
                                        <option value="Martinique" data-alternative-spellings="MQ">Martinique</option>
                                        <option value="Mauritania" data-alternative-spellings="MR الموريتانية">Mauritania</option>
                                        <option value="Mauritius" data-alternative-spellings="MU">Mauritius</option>
                                        <option value="Mayotte" data-alternative-spellings="YT">Mayotte</option>
                                        <option value="Mexico" data-alternative-spellings="MX Mexicanos" data-relevancy-booster="1.5">Mexico</option>
                                        <option value="Micronesia, Federated States of" data-alternative-spellings="FM">Micronesia, Federated States of</option>
                                        <option value="Moldova, Republic of" data-alternative-spellings="MD">Moldova, Republic of</option>
                                        <option value="Monaco" data-alternative-spellings="MC">Monaco</option>
                                        <option value="Mongolia" data-alternative-spellings="MN Mongγol ulus Монгол улс">Mongolia</option>
                                        <option value="Montenegro" data-alternative-spellings="ME">Montenegro</option>
                                        <option value="Montserrat" data-alternative-spellings="MS" data-relevancy-booster="0.5">Montserrat</option>
                                        <option value="Morocco" data-alternative-spellings="MA المغرب">Morocco</option>
                                        <option value="Mozambique" data-alternative-spellings="MZ Moçambique">Mozambique</option>
                                        <option value="Myanmar" data-alternative-spellings="MM">Myanmar</option>
                                        <option value="Namibia" data-alternative-spellings="NA Namibië">Namibia</option>
                                        <option value="Nauru" data-alternative-spellings="NR Naoero" data-relevancy-booster="0.5">Nauru</option>
                                        <option value="Nepal" data-alternative-spellings="NP नेपाल">Nepal</option>
                                        <option value="Netherlands" data-alternative-spellings="NL Holland Nederland" data-relevancy-booster="1.5">Netherlands</option>
                                        <option value="New Caledonia" data-alternative-spellings="NC" data-relevancy-booster="0.5">New Caledonia</option>
                                        <option value="New Zealand" data-alternative-spellings="NZ Aotearoa">New Zealand</option>
                                        <option value="Nicaragua" data-alternative-spellings="NI">Nicaragua</option>
                                        <option value="Niger" data-alternative-spellings="NE Nijar">Niger</option>
                                        <option value="Nigeria" data-alternative-spellings="NG Nijeriya Naíjíríà" data-relevancy-booster="1.5">Nigeria</option>
                                        <option value="Niue" data-alternative-spellings="NU" data-relevancy-booster="0.5">Niue</option>
                                        <option value="Norfolk Island" data-alternative-spellings="NF" data-relevancy-booster="0.5">Norfolk Island</option>
                                        <option value="Northern Mariana Islands" data-alternative-spellings="MP" data-relevancy-booster="0.5">Northern Mariana Islands</option>
                                        <option value="Norway" data-alternative-spellings="NO Norge Noreg" data-relevancy-booster="1.5">Norway</option>
                                        <option value="Oman" data-alternative-spellings="OM عمان">Oman</option>
                                        <option value="Pakistan" data-alternative-spellings="PK پاکستان" data-relevancy-booster="2">Pakistan</option>
                                        <option value="Palau" data-alternative-spellings="PW" data-relevancy-booster="0.5">Palau</option>
                                        <option value="Palestinian Territory, Occupied" data-alternative-spellings="PS فلسطين">Palestinian Territory, Occupied</option>
                                        <option value="Panama" data-alternative-spellings="PA">Panama</option>
                                        <option value="Papua New Guinea" data-alternative-spellings="PG">Papua New Guinea</option>
                                        <option value="Paraguay" data-alternative-spellings="PY">Paraguay</option>
                                        <option value="Peru" data-alternative-spellings="PE">Peru</option>
                                        <option value="Philippines" data-alternative-spellings="PH Pilipinas" data-relevancy-booster="1.5">Philippines</option>
                                        <option value="Pitcairn" data-alternative-spellings="PN" data-relevancy-booster="0.5">Pitcairn</option>
                                        <option value="Poland" data-alternative-spellings="PL Polska" data-relevancy-booster="1.25">Poland</option>
                                        <option value="Portugal" data-alternative-spellings="PT Portuguesa" data-relevancy-booster="1.5">Portugal</option>
                                        <option value="Puerto Rico" data-alternative-spellings="PR">Puerto Rico</option>
                                        <option value="Qatar" data-alternative-spellings="QA قطر">Qatar</option>
                                        <option value="Réunion" data-alternative-spellings="RE Reunion">Réunion</option>
                                        <option value="Romania" data-alternative-spellings="RO Rumania Roumania România">Romania</option>
                                        <option value="Russian Federation" data-alternative-spellings="RU Rossiya Российская Россия" data-relevancy-booster="2.5">Russian Federation</option>
                                        <option value="Rwanda" data-alternative-spellings="RW">Rwanda</option>
                                        <option value="Saint Barthélemy" data-alternative-spellings="BL St. Barthelemy">Saint Barthélemy</option>
                                        <option value="Saint Helena" data-alternative-spellings="SH St.">Saint Helena</option>
                                        <option value="Saint Kitts and Nevis" data-alternative-spellings="KN St.">Saint Kitts and Nevis</option>
                                        <option value="Saint Lucia" data-alternative-spellings="LC St.">Saint Lucia</option>
                                        <option value="Saint Martin (French Part)" data-alternative-spellings="MF St.">Saint Martin (French Part)</option>
                                        <option value="Saint Pierre and Miquelon" data-alternative-spellings="PM St.">Saint Pierre and Miquelon</option>
                                        <option value="Saint Vincent and the Grenadines" data-alternative-spellings="VC St.">Saint Vincent and the Grenadines</option>
                                        <option value="Samoa" data-alternative-spellings="WS">Samoa</option>
                                        <option value="San Marino" data-alternative-spellings="SM RSM Repubblica">San Marino</option>
                                        <option value="Sao Tome and Principe" data-alternative-spellings="ST">Sao Tome and Principe</option>
                                        <option value="Saudi Arabia" data-alternative-spellings="SA السعودية">Saudi Arabia</option>
                                        <option value="Senegal" data-alternative-spellings="SN Sénégal">Senegal</option>
                                        <option value="Serbia" data-alternative-spellings="RS Србија Srbija">Serbia</option>
                                        <option value="Seychelles" data-alternative-spellings="SC" data-relevancy-booster="0.5">Seychelles</option>
                                        <option value="Sierra Leone" data-alternative-spellings="SL">Sierra Leone</option>
                                        <option value="Singapore" data-alternative-spellings="SG Singapura  சிங்கப்பூர் குடியரசு 新加坡共和国">Singapore</option>
                                        <option value="Sint Maarten (Dutch Part)" data-alternative-spellings="SX">Sint Maarten (Dutch Part)</option>
                                        <option value="Slovakia" data-alternative-spellings="SK Slovenská Slovensko">Slovakia</option>
                                        <option value="Slovenia" data-alternative-spellings="SI Slovenija">Slovenia</option>
                                        <option value="Solomon Islands" data-alternative-spellings="SB">Solomon Islands</option>
                                        <option value="Somalia" data-alternative-spellings="SO الصومال">Somalia</option>
                                        <option value="South Africa" data-alternative-spellings="ZA RSA Suid-Afrika">South Africa</option>
                                        <option value="South Georgia and the South Sandwich Islands" data-alternative-spellings="GS">South Georgia and the South Sandwich Islands</option>
                                        <option value="South Sudan" data-alternative-spellings="SS">South Sudan</option>
                                        <option value="Spain" data-alternative-spellings="ES España" data-relevancy-booster="2">Spain</option>
                                        <option value="Sri Lanka" data-alternative-spellings="LK ශ්‍රී ලංකා இலங்கை Ceylon">Sri Lanka</option>
                                        <option value="Sudan" data-alternative-spellings="SD السودان">Sudan</option>
                                        <option value="Suriname" data-alternative-spellings="SR शर्नम् Sarnam Sranangron">Suriname</option>
                                        <option value="Svalbard and Jan Mayen" data-alternative-spellings="SJ" data-relevancy-booster="0.5">Svalbard and Jan Mayen</option>
                                        <option value="Swaziland" data-alternative-spellings="SZ weSwatini Swatini Ngwane">Swaziland</option>
                                        <option value="Sweden" data-alternative-spellings="SE Sverige" data-relevancy-booster="1.5">Sweden</option>
                                        <option value="Switzerland" data-alternative-spellings="CH Swiss Confederation Schweiz Suisse Svizzera Svizra" data-relevancy-booster="1.5">Switzerland</option>
                                        <option value="Syrian Arab Republic" data-alternative-spellings="SY Syria سورية">Syrian Arab Republic</option>
                                        <option value="Taiwan, Province of China" data-alternative-spellings="TW 台灣 臺灣">Taiwan, Province of China</option>
                                        <option value="Tajikistan" data-alternative-spellings="TJ Тоҷикистон Toçikiston">Tajikistan</option>
                                        <option value="Tanzania, United Republic of" data-alternative-spellings="TZ">Tanzania, United Republic of</option>
                                        <option value="Thailand" data-alternative-spellings="TH ประเทศไทย Prathet Thai">Thailand</option>
                                        <option value="Timor-Leste" data-alternative-spellings="TL">Timor-Leste</option>
                                        <option value="Togo" data-alternative-spellings="TG Togolese">Togo</option>
                                        <option value="Tokelau" data-alternative-spellings="TK" data-relevancy-booster="0.5">Tokelau</option>
                                        <option value="Tonga" data-alternative-spellings="TO">Tonga</option>
                                        <option value="Trinidad and Tobago" data-alternative-spellings="TT">Trinidad and Tobago</option>
                                        <option value="Tunisia" data-alternative-spellings="TN تونس">Tunisia</option>
                                        <option value="Turkey" data-alternative-spellings="TR Türkiye Turkiye">Turkey</option>
                                        <option value="Turkmenistan" data-alternative-spellings="TM Türkmenistan">Turkmenistan</option>
                                        <option value="Turks and Caicos Islands" data-alternative-spellings="TC" data-relevancy-booster="0.5">Turks and Caicos Islands</option>
                                        <option value="Tuvalu" data-alternative-spellings="TV" data-relevancy-booster="0.5">Tuvalu</option>
                                        <option value="Uganda" data-alternative-spellings="UG">Uganda</option>
                                        <option value="Ukraine" data-alternative-spellings="UA Ukrayina Україна">Ukraine</option>
                                        <option value="United Arab Emirates" data-alternative-spellings="AE UAE الإمارات">United Arab Emirates</option>
                                        <option value="United Kingdom" data-alternative-spellings="GB Great Britain England UK Wales Scotland Northern Ireland" data-relevancy-booster="2.5">United Kingdom</option>
                                        <option value="United States" data-relevancy-booster="3.5" data-alternative-spellings="US USA United States of America">United States</option>
                                        <option value="United States Minor Outlying Islands" data-alternative-spellings="UM">United States Minor Outlying Islands</option>
                                        <option value="Uruguay" data-alternative-spellings="UY">Uruguay</option>
                                        <option value="Uzbekistan" data-alternative-spellings="UZ Ўзбекистон O'zbekstan O‘zbekiston">Uzbekistan</option>
                                        <option value="Vanuatu" data-alternative-spellings="VU">Vanuatu</option>
                                        <option value="Venezuela" data-alternative-spellings="VE">Venezuela</option>
                                        <option value="Vietnam" data-alternative-spellings="VN Việt Nam" data-relevancy-booster="1.5">Vietnam</option>
                                        <option value="Virgin Islands, British" data-alternative-spellings="VG" data-relevancy-booster="0.5">Virgin Islands, British</option>
                                        <option value="Virgin Islands, U.S." data-alternative-spellings="VI" data-relevancy-booster="0.5">Virgin Islands, U.S.</option>
                                        <option value="Wallis and Futuna" data-alternative-spellings="WF" data-relevancy-booster="0.5">Wallis and Futuna</option>
                                        <option value="Western Sahara" data-alternative-spellings="EH لصحراء الغربية">Western Sahara</option>
                                        <option value="Yemen" data-alternative-spellings="YE اليمن">Yemen</option>
                                        <option value="Zambia" data-alternative-spellings="ZM">Zambia</option>
                                        <option value="Zimbabwe" data-alternative-spellings="ZW">Zimbabwe</option>
                                    </select>
                                </div>
                                <%--</div>--%>
                            </div>

                            <div class="blockInner">
                                <div class="inputTextTitle">
                                    Profession *
                                </div>
                                <div class="inputText field">
                                    <select tabindex="5" name="enterInformationProfession" id="enterInformationProfession">
                                        <option value="na">Select profession</option>
                                        <option value="Analyst">Analyst</option>
                                        <option value="Broker">Broker</option>
                                        <option value="Employee">Employee</option>
                                        <option value="Fund manager">Fund manager</option>
                                        <option value="Investor">Investor</option>
                                        <option value="Journalist">Journalist</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="divideLine"></div>

                    <div class="blockOuter">

                        <h2 class="header">Press Releases
                        </h2>
                        <p>
                            Please inform me when press releases are announced.
                        </p>
                        <div class="subGroup">
                            <div id="ReleaseRSSTrigger" class="checkbox ReleaseRSS">Press Releases</div>
                            <div class="clearBoth"></div>
                        </div>

                    </div>
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



            <div class="divider"></div>

            <div class="blockOuter">
                <input type="button" tabindex="7" class="formRegister styledButton clearInput" value="Subscribe" />
                <a class="cleanLink formUnsubscribe unsubscribeNextToButton">Unsubscribe</a>
            </div>


            <input type="hidden" name="activeClient" class="activeClient" value="<%= activeClient %>" />
            <input type="hidden" name="solutionID" class="solutionID" value="<%= solutionID %>" />
            <input type="hidden" name="instrumentID" class="instrumentID" value="<%= instrumentID %>" />
            <input type="hidden" name="companyAnnoucementLanguage" value="English" class="companyAnnoucementLanguage" id="companyAnnoucementLanguage" />
            <input type="hidden" class="ReleaseRNSFilter" id="ReleaseRNSFilter" checked="checked" />
            <input type="hidden" class="ReleaseRSS" id="ReleaseRSS" />
            <input type="hidden" id="feedURL" class="feedURL" value="<%= feedURL %>" />

            </form>

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

        </div>

    </div>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <%--  <script type="text/javascript" src="jquery-1.11.1.min.js"></script>--%>
    <script type="text/javascript" src="jquery-ui.min.js"></script>
    <script type="text/javascript" src="jquery.select-to-autocomplete.js"></script>
    <script type="text/javascript" src="http://ir.euroinvestor.com/tools/EmailAlertsWithPush/inc/genericIR.js?v=1450872567"></script>
    <script type="text/javascript" src="http://ir.euroinvestor.com/Tools/EmailAlertsWithPush/Inc/genericIR_mobileOverlayFix.js"></script>



    <script type="text/javascript" src="checkbox.js"></script>



    <script type="text/javascript">


        $(function () {

            $('.checkbox').click(function () {
                $('#ReleaseRSS').prop('checked', $(this).hasClass('checked'));
            });
        });


        (function ($) {
            $(function () {
                $('select.field').selectToAutocomplete();
                $('form').submit(function () {
                    alert($(this).serialize());
                    return false;
                });
            });
        })(jQuery);


        /* Check required input fields from GenericIR */

        function checkInputFields() {
            var isOK = true;
            $('.requiredFieldMSG').html('');
            if (activePage == 1) {

                //
                //  Step 1, check that the input elements exists.
                //
                var isReleaseA = false;
                var isActiveFirstName = false;
                var isActiveLastName = false;
                var isActiveEmailAdress = false;
                var isRNSFiltersOnly = false;
                var isRNSAndStock = false;
                var isRSS = false;
                //var isStockInformationAll = false;
                //var isAllRNSButton = false;

                if ($('.ReleasesA').length == 1) {
                    isReleaseA = true;
                }
                if ($('.enterInformationFirstName').length == 1) {
                    isActiveFirstName = true;
                }
                if ($('.enterInformationLastName').length == 1) {
                    isActiveLastName = true;
                }
                if ($('.enterInformationEmail').length == 1) {
                    isActiveEmailAdress = true;
                }
                if ($('#allRNSnews').length == 1 && $('#emailEOD').length == 1) {
                    isRNSAndStock = true;
                }
                if ($('.checkboxRNSFilter').length > 1 && $('#emailEOD').length == 0) {
                    isRNSFiltersOnly = true;
                }
                if ($('.checkboxCountry').length > 1 && $('.checkboxBusinessLines').length > 1 && $('.checkboxCategoriesLines').length > 1) {
                    isRSS = true;
                }
                if ($('#ReleaseRSS').length == 1) {
                    isRSS = true;
                }



                //if ($('.emailEOD').length == 1 && $('.emailWeekly').length == 1 && $('.emailThreshold').length == 1 && $('.emailChangePercentage').length == 1) {
                //    isStockInformationAll = true;
                //}
                //if ($('#allRNSnews').length) {
                //    isAllRNSButton = true;
                //}




                //
                //  Step 2, check the value of the input elements.
                //
                if (isReleaseA) {
                    if ($('.ReleasesA').val() == 'checked') {
                        // OK
                    } else if ($('.ReleasesA').is(':checked')) {
                        // OK
                    } else {
                        isOK = false;
                    }
                }
                if (isActiveFirstName) {
                    if ($('#enterInformationFirstName').val().length < 1) {
                        isOK = false;
                    }
                }
                if (isActiveLastName) {
                    if ($('#enterInformationLastName').val().length < 1) {
                        isOK = false;
                    }
                }
                if (isActiveEmailAdress) {
                    var emailEntered = $('#enterInformationEmail').val();
                    //
                    //  Email validation
                    //
                    var indexLocation_at = emailEntered.indexOf("@");
                    if (emailEntered.length < 5) {
                        isOK = false;
                    }
                    if (indexLocation_at == -1) {
                        isOK = false;
                    }
                }

                if (isRNSFiltersOnly) {
                    var countSelectedCheckbox = 0;

                    $('.checkboxRNSFilter').each(function () {
                        if ($(this).hasClass('checked')) {
                            countSelectedCheckbox = countSelectedCheckbox + 1;
                        }
                    });

                    if (countSelectedCheckbox == 0) {
                        isOK = false;
                    }
                }

                if (isRNSAndStock) {
                    var countSelectedCheckbox = 0;

                    $('.checkboxRNSFilter').each(function () {
                        if ($(this).hasClass('checked')) {
                            countSelectedCheckbox = countSelectedCheckbox + 1;
                        }
                    });

                    if ($('.emailEOD').val() == 'checked' || $('.emailEOD').is(':checked') ||
                        $('.emailBOD').val() == 'checked' || $('.emailBOD').is(':checked') ||
                        $('.emailWeekly').val() == 'checked' || $('.emailWeekly').is(':checked') ||
                        $('.emailThreshold').val() == 'checked' || $('.emailThreshold').is(':checked') ||
                        $('.emailChangePercentage').val() == 'checked' || $('.emailChangePercentage').is(':checked')) {
                        countSelectedCheckbox = countSelectedCheckbox + 1;
                    }

                    if (countSelectedCheckbox == 0) {
                        isOK = false;
                    }
                }
                if (isRSS) {
                    var countSelectedCheckbox = 0;
                    console.log($('.checkbox'));
                    $('.checkbox').each(function () {
                        if ($(this).hasClass('checked')) {
                            countSelectedCheckbox = countSelectedCheckbox + 1;
                        }
                    });

                    if (countSelectedCheckbox == 0) {
                        isOK = false;
                    }

                    if ($('#ReleaseRSSTrigger').hasClass('checked')) {
                        isOK = true;
                    }

                }
            }

            if (!isOK) {

                $('.requiredFieldMSG').html('Please fill in all required fields');

                //if (isAllRNSButton && isStockInformationAll) {
                //    $('.requiredOptionsMSG').html('Please verify above options!');
                //}
            }

            return isOK;
        }



    </script>
</body>
</html>
