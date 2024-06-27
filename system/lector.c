#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <mysql/mysql.h>
#include <time.h>

void save_to_db(const char *pid, const char *process_name, const char *call, const char *size, const char *timestamp) {
    MYSQL *conn;
    MYSQL_RES *res;
    MYSQL_ROW row;

    char *server = "192.168.10.105";
    char *user = "admin2";
    char *password = "usuario.1";
    char *database = "memoriadb";
    char *port = "3306";

    conn = mysql_init(NULL);

    if (!mysql_real_connect(conn, server, user, password, database, atoi(port), NULL, 0)) {
        fprintf(stderr, "%s\n", mysql_error(conn));
        exit(1);
    }

    char query[1024];
    snprintf(query, sizeof(query), "INSERT INTO memoria_proceso (pid, nombre_proceso, tipo, size, timestamp) VALUES ('%s', '%s', '%s', '%s', '%s')", pid, process_name, call, size, timestamp);

    if (mysql_query(conn, query)) {
        fprintf(stderr, "%s\n", mysql_error(conn));
        exit(1);
    }

    mysql_close(conn);
}

void convert_timestamp(const char *input, char *output) {
    struct tm tm;
    char month_str[4];
    int month;

    sscanf(input, "%*s %3s %d %d:%d:%d %d", month_str, &tm.tm_mday, &tm.tm_hour, &tm.tm_min, &tm.tm_sec, &tm.tm_year);

    if (strcmp(month_str, "Jan") == 0) month = 0;
    else if (strcmp(month_str, "Feb") == 0) month = 1;
    else if (strcmp(month_str, "Mar") == 0) month = 2;
    else if (strcmp(month_str, "Apr") == 0) month = 3;
    else if (strcmp(month_str, "May") == 0) month = 4;
    else if (strcmp(month_str, "Jun") == 0) month = 5;
    else if (strcmp(month_str, "Jul") == 0) month = 6;
    else if (strcmp(month_str, "Aug") == 0) month = 7;
    else if (strcmp(month_str, "Sep") == 0) month = 8;
    else if (strcmp(month_str, "Oct") == 0) month = 9;
    else if (strcmp(month_str, "Nov") == 0) month = 10;
    else if (strcmp(month_str, "Dec") == 0) month = 11;

    tm.tm_mon = month;
    tm.tm_year -= 1900;

    strftime(output, 20, "%Y-%m-%d %H:%M:%S", &tm);
}


int main() {

    char buffer[1024];
    char pid[16], process_name[256], call[16], size[16], timestamp[64], converted_timestamp[20];

    while (fgets(buffer, sizeof(buffer), stdin)) {

        buffer[strcspn(buffer, "\n")] = '\0';

        if (sscanf(buffer, "PID: %15[^,], Proceso: %255[^,], Llamada: %15[^,], Tamaño: %15[^,], Fecha: %[^\n]",
                   pid, process_name, call, size, timestamp) == 5) {

                    convert_timestamp(timestamp, converted_timestamp);

            save_to_db(pid, process_name, call, size, converted_timestamp);
        } else {
            fprintf(stderr, "Error: entrada no válida\n");
        }
    }

    return 0;
}
