package project_plans;

import java.sql.Connection;
import java.sql.DriverManager;
// import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
// import java.sql.Timestamp;
import java.sql.Statement;
// import java.text.SimpleDateFormat;
// import java.util.Date;


public class SQLiteExample {
    public static void main(String[] args) {
        // System.out.println("running this file");
        String jdbcUrl = "jdbc:sqlite:/test.db";
        try{
            Class.forName("org.sqlite.JDBC");
            System.out.println("class loaded");
        } catch (ClassNotFoundException e) {
            System.out.println("catch err");
        }
        
        try {
            
            Connection connection = DriverManager.getConnection(jdbcUrl);
            String sql = "SELECT * FROM meetings";

            Statement statement = connection.createStatement();
            
            ResultSet result = statement.executeQuery(sql);
            while (result.next()) {
                String name = result.getString("name");
                String desc = result.getString("description");

                System.out.println(name + "|" + desc);
            }

        } catch (SQLException e) {
            System.out.println("connection error");
            e.printStackTrace();
        }
    }
}

