<template>
    <main>
        <section class="content">
            <h1>Database</h1>
            <p>
                The iMono framework provides a simple and efficient way to interact with databases through the
                <code>Connection</code> class located in <code>app/database/Connection.php</code>. This class utilizes
                PHP's PDO (PHP
                Data
                Objects) extension to establish and manage database connections. The class follows the Singleton pattern
                to ensure that only one database connection is active at any given time.
            </p>

            <div class="row mt-4">
                <div class="col-12">
                    <h6>On this page</h6>
                    <ul class="">
                        <li><a href="#configuration" class="text-decoration-none">Configuration</a></li>
                        <li><a href="#class-definition" class="text-decoration-none">Class definition</a></li>
                        <li><a href="#usage" class="text-decoration-none">Usage</a></li>
                        <li><a href="#singletton-pattern" class="text-decoration-none">Singletton Pattern</a></li>
                        <li><a href="#conclusion" class="text-decoration-none">Conclusion</a></li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="content" id="configuration">
            <h3>Configuration</h3>
            <p>
                Before using the <code>Connection</code> class, ensure that your database configurations are set
                correctly in the
                <code>app/config/config.php</code> file. The relevant constants to be defined are:
            </p>

            <p>
                <code>app/config/config.php</code>:
            </p>
            <CodeHighlighter :code="configFile"></CodeHighlighter>
        </section>

        <section class="content" id="class-definition">
            <div class="sub-content">
                <h3>Class Definition</h3>
                <p>
                    The <code>Connection</code> class is defined within the <code>app\database</code> namespace and uses
                    the
                    PDO and PDOException
                    classes from the global namespace.
                </p>
            </div>

            <div class="sub-content">
                <h5>Properties</h5>
                <ul>
                    <li>
                        <code>private static $connection;</code>: Holds the single instance of the PDO connection.
                    </li>
                </ul>
            </div>

            <div class="sub-content">
                <h5>Methods</h5>

                <div>
                    <code>getConnection()</code>
                    <p>
                        This static method returns the active PDO connection. If no connection exists, it creates one
                        using
                        the defined database constants.
                    </p>
                </div>

                <div>
                    <code>disconnect()</code>
                    <p>
                        This static method sets the connection property to null, effectively closing the database
                        connection.
                    </p>
                </div>
            </div>
        </section>

        <section class="content" id="usage">
            <div class="sub-content">
                <h3>Usage</h3>
                <p>
                    To interact with the database, use the provided <code>Connection</code> class. This ensures that all
                    database
                    operations utilize a single connection instance, promoting efficiency and consistency.
                </p>
            </div>

            <div class="sub-content">
                <h5>Example usage</h5>
            <CodeHighlighter :code="exampleUsage"></CodeHighlighter>
            </div>
        </section>

        <section class="content" id="singleton-pattern">
            <h3>Singleton Pattern</h3>
            <p>
                While you can establish database connections in various ways, the iMono framework promotes the use of
                the Singleton pattern for organizing connections. This pattern ensures that only one instance of the
                database connection exists throughout the application lifecycle, reducing overhead and potential
                connection issues.
            </p>
        </section>

        <section class="content" id="conclusion">
            <h3>Conclusion</h3>
            <p>
                The <code>Connection</code> class in the iMono framework provides a streamlined way to manage database
                connections
                using the Singleton pattern. By configuring your database settings in config.php and using the
                <code>getConnection</code> and <code>disconnect</code> methods, you can efficiently interact with your
                database in a consistent
                and organized manner. This documentation covers the essential aspects of the <code>Connection</code>
                class, ensuring
                you can utilize it effectively in your iMono applications.
            </p>
        </section>
    </main>
</template>


<script setup>
import CodeHighlighter from '../components/CodeHighlighter.vue';

const configFile = `define("DB_DRIVER", "mysql"); // or the driver you are using
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASS", "");
define("DB_NAME", "my_database");`;

const exampleUsage = `use app\\database\\Connection;

// Get the database connection
$db = Connection::getConnection();

// Perform database operations using $db (which is a PDO instance)

// Close the database connection when done
Connection::disconnect();`;
</script>