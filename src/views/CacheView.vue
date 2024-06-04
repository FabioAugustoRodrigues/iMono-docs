<template>
    <main>
        <section class="content">
            <h1>Cache System</h1>
            <p>
                The iMono framework includes a simple caching system designed to temporarily store data and improve the
                performance of your application. This caching system is configurable and easy to use.
            </p>

            <div class="row mt-4">
                <div class="col-12">
                    <h6>On this page</h6>
                    <ul class="">
                        <li><a href="#configuration" class="text-decoration-none">Configuration</a></li>
                        <li><a href="#supported-types" class="text-decoration-none">Supported Cache Types</a></li>
                        <li><a href="#using-cache" class="text-decoration-none">Using the cache</a></li>
                        <li><a href="#example-usage" class="text-decoration-none">Example usage</a></li>
                        <li><a href="#conclusion" class="text-decoration-none">Conclusion</a></li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="content" id="configuration">
            <div class="sub-content">
                <h3>Configuration</h3>
                <p>
                    The type of cache to be used is configured in the <code>app/config/config.php</code> file.
                    By default, the caching system uses an in-memory array to store cached data.
                </p>
            </div>
            <div class="sub-content">
                <h5>Default configuration</h5>
                <CodeHighlighter :code="deafultCacheConfigs"></CodeHighlighter>
            </div>
        </section>

        <section class="content" id="supported-types">
            <h3>Supported Cache Types</h3>
            <p>
                Currently, iMono supports array-based caching. This type of caching is suitable for temporary, in-memory
                storage of data.
            </p>
        </section>

        <section class="content" id="using-cache">
            <div class="sub-content">
                <h3>Using the Cache</h3>
                <p>
                    To use the cache in your application, you can leverage the <code>CacheFacade</code> class. This
                    class
                    provides a
                    simple interface for setting, getting, and managing cached data.
                </p>
            </div>

            <div class="sub-content">
                <h5>Setting a Value in the Cache</h5>
                <p>
                    You can set a value in the cache using the <code>CacheFacade::set</code> method. This method takes
                    two
                    parameters:
                    the key and the value to be stored.
                </p>
                <CodeHighlighter :code="settingValue"></CodeHighlighter>
            </div>

            <div class="sub-content">
                <h5>Checking if a Key Exists in the Cache</h5>
                <p>
                    To check if a specific key exists in the cache, use the <code>CacheFacade::has</code> method. This
                    method returns a boolean indicating whether the key exists.
                </p>
                <CodeHighlighter :code="keyExists"></CodeHighlighter>
            </div>

            <div class="sub-content">
                <h5>Getting a Value from the Cache</h5>
                <p>
                    Retrieve a value from the cache using the <code>CacheFacade::get</code> method. Provide the key for
                    the
                    value you
                    want to retrieve.
                </p>
                <CodeHighlighter :code="getValue"></CodeHighlighter>
            </div>

            <div class="sub-content">
                <h5>Removing a Value from the Cache</h5>
                <p>
                    You can remove a value from the cache using the <code>CacheFacade::remove</code> method. This method
                    takes the key of the value to be removed.
                </p>
                <CodeHighlighter :code="removeValue"></CodeHighlighter>
            </div>

            <div class="sub-content">
                <h3>Clearing Expired Items from the Cache</h3>
                <p>
                    To clear all expired items from the cache, use the <code>CacheFacade::clearExpired</code> method.
                </p>
                <CodeHighlighter :code="clearExpiredItems"></CodeHighlighter>
            </div>

            <div class="sub-content">
                <h5>Clearing the Entire Cache</h5>
                <p>
                    If you need to clear all items from the cache, use the <code>CacheFacade::clearAll</code> method.
                </p>
                <CodeHighlighter :code="clearEntireCache"></CodeHighlighter>
            </div>
        </section>

        <section class="content" id="example-usage">
            <h3>Example usage</h3>
            <p>
                Below is a complete example demonstrating how to use the caching system in your application:
            </p>
            <CodeHighlighter :code="exampleUsage"></CodeHighlighter>
        </section>

        <section class="content" id="conclusion">
            <h3>Conclusion</h3>
            <p>
                The caching system in the iMono framework is a powerful tool for improving the performance of your
                application by temporarily storing frequently accessed data. By configuring the cache driver in the
                <code>config.php</code>
                file and using the <code>CacheFacade</code> class, you can easily manage cached data in your
                application.
                This documentation provides a comprehensive overview of the caching system's configuration and usage.
            </p>
        </section>
    </main>
</template>


<script setup>
import CodeHighlighter from '../components/CodeHighlighter.vue';

const deafultCacheConfigs = `# CACHE CONFIGS
CacheFacade::setCacheType(
    "array"
);`;

const settingValue = `use app\\cache\\CacheFacade;

// Set a value in the cache
CacheFacade::set('my_key', 'my_value');`;

const keyExists = `if (CacheFacade::has('my_key')) {
    // Get the value from the cache
    $value = CacheFacade::get('my_key');
}`;

const getValue = `$value = CacheFacade::get('my_key');`;

const removeValue = `CacheFacade::remove('my_key');`;

const clearExpiredItems = `CacheFacade::clearExpired();`;

const clearEntireCache = `CacheFacade::clearAll();`;

const exampleUsage = `use app\\cache\\CacheFacade;

// Set a value in the cache
CacheFacade::set('user_123', ['name' => 'John Doe', 'email' => 'john.doe@example.com']);

// Check if the cache key exists
if (CacheFacade::has('user_123')) {
    // Get the value from the cache
    $user = CacheFacade::get('user_123');
    // Output: John Doe
    echo $user['name'];
}

// Remove a specific value from the cache
CacheFacade::remove('user_123');

// Clear all expired items from the cache
CacheFacade::clearExpired();

// Clear the entire cache
CacheFacade::clearAll();`;
</script>