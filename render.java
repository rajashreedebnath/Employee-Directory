import freemarker.template.*;
import java.io.*;
import java.util.*;

public class render {
    public static void main(String[] args) throws Exception {
        Configuration cfg = new Configuration(Configuration.VERSION_2_3_31);
        cfg.setDirectoryForTemplateLoading(new File("."));
        cfg.setDefaultEncoding("UTF-8");

        Template template = cfg.getTemplate("index.ftl");

        Map<String, Object> data = new HashMap<>();
        List<Map<String, Object>> employees = new ArrayList<>();
        employees.add(Map.of("id", 1, "firstName", "Alice", "lastName", "Smith", "email", "alice@example.com", "department", "HR", "role", "Manager"));
        employees.add(Map.of("id", 2, "firstName", "Bob", "lastName", "Johnson", "email", "bob@example.com", "department", "IT", "role", "Developer"));
        employees.add(Map.of("id", 3, "firstName", "Charlie", "lastName", "Lee", "email", "charlie@example.com", "department", "Finance", "role", "Analyst"));
        data.put("employees", employees);

        Writer out = new FileWriter("index.html");
        template.process(data, out);
        out.close();

        System.out.println("index.html generated!");
    }
}
