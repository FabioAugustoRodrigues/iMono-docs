<template>
    <main>
        <section class="content">
            <h1>Configuration</h1>
            <p>
                The iMono framework allows you to configure various system constants and settings in the
                <code>config.php</code> file
                located in the <code>app/config</code> directory. This configuration file is essential for setting up
                your database
                connections, cache settings, and other system-wide constants.
            </p>
            
            <div class="row mt-4">
                <div class="col-12">
                    <h6>On this page</h6>
                    <ul class="">
                        <li><a href="#configuration-file" class="text-decoration-none">Configuration file</a></li>
                        <li><a href="#conclusion" class="text-decoration-none">Conclusion</a></li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="content" id="configuration-file">
            <h3>Configuration file</h3>
            <p>
                The <code>config.php</code> file is where you define constants and configure system settings. It
                includes database
                configurations and cache settings, among other potential configurations.
            </p>

            <p>
                <code>app/config/config.php</code>:
            </p>
            <CodeHighlighter :code="configFile"></CodeHighlighter>
        </section>

        <section class="content" id="conclusion">
            <h3>Conclusion</h3>
            <p>
                The <code>config.php</code> file in the iMono framework is the central location for defining system-wide
                constants
                and configurations. By setting up your database and cache configurations here, you ensure that these
                settings are easily manageable and consistently applied throughout your application. This documentation
                provides an overview of how to set up and use the configuration file effectively.
            </p>
        </section>
    </main>
</template>


<script setup>
import CodeHighlighter from '../components/CodeHighlighter.vue';

const configFile = `<?php

use app\\cache\\CacheFacade;

require_once __DIR__ . '/../../vendor/autoload.php';

# DATABASE CONFIGS
define("DB_DRIVER", "db_driver");
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASS", "root");
define("DB_NAME", "name");

# CACHE CONFIGS
CacheFacade::setCacheType("array");
`;
</script>