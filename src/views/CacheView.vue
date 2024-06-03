<template>
    <main>
        <section class="mb-4">
            <h1>Cache System</h1>
            <p>
                The iMono framework includes a simple caching system designed to temporarily store data and improve the
                performance of your application. This caching system is configurable and easy to use.
            </p>
        </section>

        <section>
            <h3>Configuration file</h3>
            <p>
                The type of cache to be used is configured in the <code>app/config/config.php</code> file.
                By default, the caching system uses an in-memory array to store cached data.
            </p>
        </section>

        <section>
            <h3>Default configuration</h3>
            <CodeHighlighter :code="deafultCacheConfigs"></CodeHighlighter>
        </section>

        <section>
            <h3>Supported Cache Types</h3>
            <p>
                Currently, iMono supports array-based caching. This type of caching is suitable for temporary, in-memory
                storage of data.
            </p>
        </section>

        <section>
            <h3>Using the Cache</h3>
            <p>
                To use the cache in your application, you can leverage the <code>CacheFacade</code> class. This class
                provides a
                simple interface for setting, getting, and managing cached data.
            </p>
        </section>

        <section>
            <h3>Setting a Value in the Cache</h3>
            <p>
                You can set a value in the cache using the <code>CacheFacade::set</code> method. This method takes two
                parameters:
                the key and the value to be stored.
            </p>
            <CodeHighlighter :code="settingValue"></CodeHighlighter>
        </section>

        <section>
            <h3>Checking if a Key Exists in the Cache</h3>
            <p>
                To check if a specific key exists in the cache, use the <code>CacheFacade::has</code> method. This
                method returns a boolean indicating whether the key exists.
            </p>
            <CodeHighlighter :code="keyExists"></CodeHighlighter>
        </section>

        <section>
            <h3>Getting a Value from the Cache</h3>
            <p>
                Retrieve a value from the cache using the <code>CacheFacade::get</code> method. Provide the key for the
                value you
                want to retrieve.
            </p>
            <CodeHighlighter :code="getValue"></CodeHighlighter>
        </section>

        <section>
            <h3>Removing a Value from the Cache</h3>
            <p>
                You can remove a value from the cache using the <code>CacheFacade::remove</code> method. This method
                takes the key of the value to be removed.
            </p>
            <CodeHighlighter :code="removeValue"></CodeHighlighter>
        </section>

        <section>
            <h3>Clearing Expired Items from the Cache</h3>
            <p>
                To clear all expired items from the cache, use the <code>CacheFacade::clearExpired</code> method.
            </p>
            <CodeHighlighter :code="clearExpiredItems"></CodeHighlighter>
        </section>

        <section>
            <h3>Clearing the Entire Cache</h3>
            <p>
                If you need to clear all items from the cache, use the <code>CacheFacade::clearAll</code> method.
            </p>
            <CodeHighlighter :code="clearEntireCache"></CodeHighlighter>
        </section>

        <section>
            <h3>Example usage</h3>
            <p>
                Below is a complete example demonstrating how to use the caching system in your application:
            </p>
            <CodeHighlighter :code="exampleUsage"></CodeHighlighter>
        </section>

        <section>
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