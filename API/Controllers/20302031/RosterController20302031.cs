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
    public class Roster20302031Controller : ControllerBase
    {
        
        private readonly IConfiguration _configuration;

        public Roster20302031Controller(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("/api/Roster20302031")]
        public JsonResult Get()
        {
            string query = @"
                    EXEC SelectPlayerRoster
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConn3031");
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

        [HttpGet("{id}")]

        public JsonResult Get(int id)
        {
            string query = @"
                    DECLARE @playerVariable int
                    SET @playerVariable = " + id +
                    @"
                    Select TOP(1) * From PlayerRoster where PlayerID > @playerVariable ORDER BY PlayerID
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConn3031");
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
                    insert into PlayerRoster values
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
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConn3031");
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
                    update dbo.PlayerRoster set 
                    FirstName = '" + ros.FirstName + @"'
                    where PlayerID = " + ros.PlayerID + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConn3031");
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
                    delete from dbo.PlayerRoster
                    where PlayerID = " + id + @"
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConn3031");
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
