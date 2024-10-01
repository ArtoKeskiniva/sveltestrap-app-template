<script>
    import ModalDemo from "./components/ModalDemo.svelte";
    import NavbarDemo from "./components/NavbarDemo.svelte";
    import TableDemo from "./components/TableDemo.svelte";
    import { Accordion, AccordionItem } from "@sveltestrap/sveltestrap";
</script>

<NavbarDemo />

<Accordion>
    <AccordionItem header="Svelterest Table Demo">
        <TableDemo />
    </AccordionItem>
    <AccordionItem header="Svelterest Modal Demo">
        <ModalDemo />
    </AccordionItem>
</Accordion>
