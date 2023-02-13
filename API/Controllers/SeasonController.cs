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
    public class SeasonController : ControllerBase
    {
        
        private readonly IConfiguration _configuration;

        public SeasonController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("/api/Season")]
        public JsonResult Get()
        {
            string query = @"
                    EXEC SelectSeason
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnSeasons");
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
                    DECLARE @seasonVariable int
                    SET @seasonVariable = " + id +
                    @"
                    Select TOP(1) * From Seasons where SeasonID > @seasonVariable ORDER BY SeasonID
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnSeasons");
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
        public JsonResult Post(Season season)
        {
            string query = @"
                    insert into Seasons values
                    (
                    '" + season.SeasonYear + @"'
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnSeasons");
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
        public JsonResult Put(Season season)
        {
            string query = @"
                    update dbo.Seasons set
                    '" + season.SeasonYear + @"'
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnSeasons");
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
                    delete from dbo.Seasons
                    where SeasonID = " + id + @"
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnSeasons");
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
