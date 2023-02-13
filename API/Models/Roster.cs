using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Roster
    {
        public int PlayerID { get; set; }
        public int Number { get; set; }
        public string Position { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public decimal Height { get; set; }
        public int Weight { get; set; }
        public string Birthdate { get; set; }
        public string Country { get; set; }
        public int Appearances { get; set; }
        public int Goals { get; set; }
        public int Assists { get; set; }
        public int CleanSheets { get; set; }
        public string OnLoan { get; set; }
        public string LoanTeam { get; set; }
        public string ImageName { get; set; }
    }
}
