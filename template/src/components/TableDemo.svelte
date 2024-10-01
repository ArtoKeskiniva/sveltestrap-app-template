<script>
    import { Table } from "@sveltestrap/sveltestrap";
</script>

<Table hover>
    <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Donald</td>
            <td>Duck</td>
            <td>@donald</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Huey</td>
            <td>Duck</td>
            <td>@huey</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Scrooge</td>
            <td>McDuck</td>
            <td>@scrooge</td>
        </tr>
    </tbody>
</Table>
