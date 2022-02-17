import { Stack } from "@chakra-ui/react";
import { ElementType } from "react";
import { BiWorld } from "react-icons/bi";
import { FaRegBuilding, FaUmbrellaBeach } from "react-icons/fa";
import { GiColiseum } from "react-icons/gi";
import { IoWineOutline } from "react-icons/io5";
import { IconItemsContent } from './IconItemsContent'


export function IconItems() {
    return (
        <Stack direction={["column","row"]} gap="60" ml="-10">
            <IconItemsContent icon={IoWineOutline} >Vida noturna</IconItemsContent>
            <IconItemsContent icon={FaUmbrellaBeach} >praia</IconItemsContent>
            <IconItemsContent icon={FaRegBuilding} >moderno</IconItemsContent>
            <IconItemsContent icon={GiColiseum} >clássico</IconItemsContent>
            <IconItemsContent icon={BiWorld} >e mais...</IconItemsContent>
        </Stack>
    );
}