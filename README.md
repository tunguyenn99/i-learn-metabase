3. **Connecting to SQL Server from Metabase**  
   ![](./images/s03_import_connection.png)  
   > Use the credentials to log into Metabase and connect to the SQL Server database.

4. **Metabase Home View**  
   ![](./images/s04_home_view.png)  
   > After logging in, this is the main landing interface where you can access databases, dashboards, and queries.

5. **X-Ray View Feature**  
   ![](./images/s05_xray_view.png)  
   > Quickly generate summaries and insights from tables using the powerful X-Ray feature.

6. **Creating SQL Parameters**  
   ![](./images/s06_sql_editor_with_parameters.png)  
   > You can parameterize SQL queries to enable dynamic filtering in dashboards.

7. **Using SQL Snippets**  
   ![](./images/s07_sql_editor_with_snippets.png)  
   > Easily reuse code blocks and query templates with snippets support.

8. **Building a Sample Dashboard**  
   ![](./images/s08_quick_sample_dashboard.png)  
   > Create your first dashboard by combining charts, filters, and saved questions.

1. ![](./images/s01_get_account.png)
2. ![](./images/s02_receive_account.png)
3. ![](./images/s03_import_connection.png)
4. ![](./images/s04_home_view.png)
5. ![](./images/s05_xray_view.png)
6. ![](./images/s06_sql_editor_with_parameters.png)
7. ![](./images/s07_sql_editor_with_snippets.png)
8. ![](./images/s08_quick_sample_dashboard.png)

---

## 📬 Integration with Telegram & Email

- Use Telegram Bot to manage user permissions and broadcast report links.
- Configure alerts and automated report delivery via email from Metabase.

---

## 🌐 Embedding Dashboards with Node.js

You can embed dashboards securely into a local web server using **Node.js** and Metabase embedding tokens.

### 🖥️ Install Node.js on Ubuntu:

```bash
sudo apt update
sudo apt install nodejs
node -v
sudo apt install npm
```

### 🚀 Setup Static Web Server

```bash
cd path/of/project
mkdir local-web
cd local-web
npm init -y
npm install express
mkdir public
cd public
# Add your embed page and server file here (e.g., server.js)
node your-server-file.js
```

### Embedding Flow:

9. **Setting Embed Options in Metabase**  
   ![](./images/s09_embed_options.png)  
   > Configure embed settings (for static embedding in self-hosted setup).

10. **Running Local Node.js Server**  
   ![](./images/s10_running_nodejs.png)  
   > Use Express to serve the embedded dashboard via a local web server.

11. **Final Embedded Result**  
   ![](./images/s11_embed_result.png)  
   > The dashboard is now successfully embedded and viewable through your web page.


---

## 📁 Project Structure

```
metabase-self-learning/
├── images/
│   ├── s01_get_account.png
│   ├── s02_receive_account.png
│   ├── ...
│   └── s11_embed_result.png
├── local-web/
│   └── public/
│       └── your-server-file.js
├── connect-other-container.ipynb
├── docker-compose.yml
├── LICENSE
├── README.md
```

---

## 📚 Resources

- [Metabase Documentation](https://www.metabase.com/docs/)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Express.js Guide](https://expressjs.com/)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
