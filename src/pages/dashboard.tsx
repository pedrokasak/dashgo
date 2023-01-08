import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react"
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from 'next/dynamic'
// import { RiGradienterFill } from "react-icons/ri";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
    chart: {
        toolbar: {
            show: false
        }, zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
       type: 'datetime',
       axisBorder: {
        color: theme.colors.gray[600]
       },
       axisTicks: {
        color: theme.colors.gray[600]
       },
       categories: [
        '2022-11-29T00:00:00.000Z',
        '2022-11-30T00:00:00.000Z',
        '2022-12-01T00:00:00.000Z',
        '2022-12-02T00:00:00.000Z',
        '2022-12-03T00:00:00.000Z',
        '2022-12-04T00:00:00.000Z',
       ] 
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            sahde: 'dark',
            opacityFrom: 0.7, 
            opacityTo: 0.2, 
        }
    },
}

const series = [
    {
        name: 'social-media',
        data: [1690, 1220, 1959, 872, 1651, 1437, 1630]
    },
    {
        name: 'site',
        data: [690, 512, 1120, 1350, 986, 789, 1120]
    }
]

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <SimpleGrid flex={1} gap={4} minChildWidth="320px" alignContent="flex-start">
                    <Box
                        p={6}
                        bg="gray.800"
                        borderRadius={8}
                        pb={6}
                    >
                        <Text fontSize="lg" mb={4}>Subscribers of the week</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb={4}>Opening Fee</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}