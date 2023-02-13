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
    public class CountryController : ControllerBase
    {
        
        private readonly IConfiguration _configuration;

        public CountryController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("/api/Country")]
        public JsonResult Get()
        {
            string query = @"
                    EXEC SelectCountry
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnCountries");
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
                    DECLARE @countryVariable int
                    SET @countryVariable = " + id +
                    @"
                    Select TOP(1) * From Countries where CountryID > @countryVariable ORDER BY CountryID
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnCountries");
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
        public JsonResult Post(Country country)
        {
            string query = @"
                    insert into Countries values
                    (
                    '" + country.CountryName + @"',
                    '" + country.CountryCode + @"'
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnCountries");
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
        public JsonResult Put(Country country)
        {
            string query = @"
                    update dbo.Countries set
                    '" + country.CountryName + @"',
                    '" + country.CountryCode + @"'
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnCountries");
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
                    delete from dbo.Countries
                    where CountryID = " + id + @"
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnCountries");
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
