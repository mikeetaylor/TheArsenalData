using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Roster20292030Controller : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public Roster20292030Controller(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    EXEC SelectPlayerRoster
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConn2930");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSouce))
            {
                myCon.Open();
                using SqlCommand myCommand = new SqlCommand(query, myCon);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                myCon.Close();
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Roster ros)
        {
            string query = @"
                    insert into dbo.Roster2 values
                    (
                    '" + ros.Number + @"',
                    '" + ros.Position + @"',
                    '" + ros.FirstName + @"',
                    '" + ros.LastName + @"',
                    '" + ros.Height + @"',
                    '" + ros.Weight + @"',
                    '" + ros.Birthdate + @"',
                    '" + ros.Country + @"',
                    '" + ros.Appearances + @"',
                    '" + ros.Goals + @"',
                    '" + ros.Assists + @"',
                    '" + ros.CleanSheets + @"',
                    '" + ros.OnLoan + @"',
                    '" + ros.LoanTeam + @"',
                    '" + ros.ImageName + @"'
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConn2930");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSouce))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Roster ros)
        {
            string query = @"
                    update dbo.Roster2 set
                    '" + ros.Number + @"',
                    '" + ros.Position + @"',
                    '" + ros.FirstName + @"',
                    '" + ros.LastName + @"',
                    '" + ros.Height + @"',
                    '" + ros.Weight + @"',
                    '" + ros.Birthdate + @"',
                    '" + ros.Country + @"',
                    '" + ros.Appearances + @"',
                    '" + ros.Goals + @"',
                    '" + ros.Assists + @"',
                    '" + ros.CleanSheets + @"',
                    '" + ros.OnLoan + @"',
                    '" + ros.LoanTeam + @"',
                    '" + ros.ImageName + @"'
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConn2930");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSouce))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.Roster2
                    where PlayerID = " + id + @"
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConn2930");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSouce))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}
