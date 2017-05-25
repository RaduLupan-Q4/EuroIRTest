using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
public partial class _Default : System.Web.UI.Page
{

    protected void Page_Load(object sender, EventArgs e)
    {


    }
    public string createFilterListItemsExperian()
    {
        StringBuilder SB = new StringBuilder();
        List<string> enabledFilters = new List<string>();
        Dictionary<string, string> listOfFilters = new Dictionary<string, string>();

        listOfFilters.Add("allRNSnews", "All News Types");
        listOfFilters.Add("a", "Acquisitions and alliances");
        listOfFilters.Add("b", "AGM and other meetings");
        listOfFilters.Add("c", "Board Changes");
        listOfFilters.Add("d", "Capital structure");
        listOfFilters.Add("e", "Director/PDMR shareholding");
        listOfFilters.Add("f", "Disposals");
        listOfFilters.Add("g", "Holding(s) in company");
        listOfFilters.Add("h", "Results");
        listOfFilters.Add("i", "Share buybacks");
        listOfFilters.Add("j", "Trading updates");
        listOfFilters.Add("k", "Voting rights");

        enabledFilters.Add("allRNSnews");
        enabledFilters.Add("a");
        enabledFilters.Add("b");
        enabledFilters.Add("c");
        enabledFilters.Add("d");
        enabledFilters.Add("e");
        enabledFilters.Add("f");
        enabledFilters.Add("g");
        enabledFilters.Add("h");
        enabledFilters.Add("i");
        enabledFilters.Add("j");
        enabledFilters.Add("k");

        SB.Append(@"<div class=""subGroup"">");
        foreach (string filterCode in enabledFilters)
        {
            SB.Append(@"<div id=""" + filterCode + @""" class=""checkbox checkboxRNSFilter"">" + listOfFilters[filterCode] + @"</div>");
        }
        SB.Append(@"<div class=""clearBoth""></div>");
        SB.Append(@"</div>");
        return SB.ToString();
    }
    public class SQL
    {
        public double last;
        private SqlConnection sqlConnection;
        public void getLastPrice(int instrumentID)
        {
            this.sqlConnection = new SqlConnection("Data Source=eurosrv14.EuroInvestor.com;UID=euroinvestor;PWD=moneymoneymoney;Initial Catalog=IRProductDB");
            this.sqlConnection.Open();
            SqlCommand cmd = new SqlCommand("IRProductDB..XML_QuoteData", this.sqlConnection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@instrumentID", instrumentID);
            using (SqlDataReader reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    last = Convert.ToDouble(reader["Last"].ToString());
                }
            }
            this.sqlConnection.Close();
        }
    }

}